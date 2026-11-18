// Removes the background from a product photo using macOS Vision (subject lifting).
// Build: swiftc -O tools/cutout.swift -o /tmp/cutout
// Run:   /tmp/cutout in.png out.png      (macOS 14+)
import Foundation
import Vision
import CoreImage
import ImageIO
import UniformTypeIdentifiers

let args = CommandLine.arguments
guard args.count == 3 else { print("usage: cutout <in> <out.png>"); exit(64) }
let inURL = URL(fileURLWithPath: args[1]), outURL = URL(fileURLWithPath: args[2])
let handler = VNImageRequestHandler(url: inURL)
let req = VNGenerateForegroundInstanceMaskRequest()
do {
  try handler.perform([req])
  guard let obs = req.results?.first else { print("no subject found in \(args[1])"); exit(2) }
  let buf = try obs.generateMaskedImage(ofInstances: obs.allInstances, from: handler, croppedToInstancesExtent: false)
  let ci = CIImage(cvPixelBuffer: buf)
  guard let cg = CIContext().createCGImage(ci, from: ci.extent) else { exit(3) }
  let dest = CGImageDestinationCreateWithURL(outURL as CFURL, UTType.png.identifier as CFString, 1, nil)!
  CGImageDestinationAddImage(dest, cg, nil)
  CGImageDestinationFinalize(dest)
  print("ok \(args[2])")
} catch { print("error: \(error)"); exit(1) }

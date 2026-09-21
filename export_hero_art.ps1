Add-Type -AssemblyName System.Drawing
$refPath = "C:\Users\DELL\.gemini\antigravity-ide\brain\6799b1cb-38aa-4e74-9102-426febd29c2f\.user_uploaded\media_1788161948913.jpg"
$img = [System.Drawing.Bitmap]::FromFile($refPath)

# Navbar ends around Y=106
# Right visual starts at X=460, Y=106 to X=1024, Y=682
$cropX = 460
$cropY = 106
$cropW = $img.Width - $cropX
$cropH = $img.Height - $cropY

$rect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$cropped = $img.Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Make pixels matching the #FEFAEF background transparent so it sits cleanly on any screen resolution!
for ($x = 0; $x -lt $cropped.Width; $x++) {
    for ($y = 0; $y -lt $cropped.Height; $y++) {
        $c = $cropped.GetPixel($x, $y)
        # If background cream/ivory
        if ($c.R -gt 248 -and $c.G -gt 244 -and $c.B -gt 233) {
            $cropped.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, $c.R, $c.G, $c.B))
        } elseif ($c.R -gt 240 -and $c.G -gt 235 -and $c.B -gt 225) {
            $diff = [Math]::Max(0, ($c.R - 240) + ($c.G - 235) + ($c.B - 225))
            $alpha = [int][Math]::Max(0, [Math]::Min(255, 255 - ($diff * 8)))
            $cropped.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($alpha, $c.R, $c.G, $c.B))
        }
    }
}

$dest = "c:\Users\DELL\Desktop\Ngstellar\happyStarz\public\images\hero\hero-reference-illustration.png"
$cropped.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Output "Saved transparent hero illustration to $dest"

$img.Dispose()
$cropped.Dispose()

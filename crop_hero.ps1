Add-Type -AssemblyName System.Drawing
$refPath = "C:\Users\DELL\.gemini\antigravity-ide\brain\6799b1cb-38aa-4e74-9102-426febd29c2f\.user_uploaded\media_1788161948913.jpg"
$img = [System.Drawing.Bitmap]::FromFile($refPath)
Write-Output "Dimensions: $($img.Width) x $($img.Height)"

# The hero section in this image starts below the navbar (~15% from top) and extends to the bottom
# The right visual starts around 48% of the width to 100% of the width
$heroTop = [int]($img.Height * 0.16)
$heroHeight = [int]($img.Height * 0.82)
$heroRightX = [int]($img.Width * 0.50)
$heroRightWidth = [int]($img.Width * 0.49)

$cropRect = New-Object System.Drawing.Rectangle($heroRightX, $heroTop, $heroRightWidth, $heroHeight)
$cropBmp = $img.Clone($cropRect, $img.PixelFormat)

$targetPath = "c:\Users\DELL\Desktop\Ngstellar\happyStarz\public\images\hero\hero-reference-visual.png"
$cropBmp.Save($targetPath, [System.Drawing.Imaging.ImageFormat]::Png)

Write-Output "Successfully cropped and saved to $targetPath"
$img.Dispose()
$cropBmp.Dispose()

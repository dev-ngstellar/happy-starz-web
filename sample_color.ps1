Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Bitmap]::FromFile("C:\Users\DELL\.gemini\antigravity-ide\brain\6799b1cb-38aa-4e74-9102-426febd29c2f\.user_uploaded\media_1788161948913.jpg")
$c1 = $img.GetPixel(300, 300)
$c2 = $img.GetPixel(500, 300)
$c3 = $img.GetPixel(100, 200)
Write-Output "Pixel 300,300: R=$($c1.R), G=$($c1.G), B=$($c1.B) Hex=#$($c1.R.ToString('X2'))$($c1.G.ToString('X2'))$($c1.B.ToString('X2'))"
Write-Output "Pixel 500,300: R=$($c2.R), G=$($c2.G), B=$($c2.B) Hex=#$($c2.R.ToString('X2'))$($c2.G.ToString('X2'))$($c2.B.ToString('X2'))"
Write-Output "Pixel 100,200: R=$($c3.R), G=$($c3.G), B=$($c3.B) Hex=#$($c3.R.ToString('X2'))$($c3.G.ToString('X2'))$($c3.B.ToString('X2'))"
$img.Dispose()

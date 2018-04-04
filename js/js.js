function mika()
{
	var image=document.getElementById('mika');
	if(image.src.match("img2.jpg"))
	{
		image.src ="img1.jpg";
	}
	else
	{
		image.src="img2.jpg";
	}
}
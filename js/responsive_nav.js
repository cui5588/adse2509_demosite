// JavaScript document to handle the 'click' event on the hamburger icon in our site
(function()
 {
	let menuToggle = document.getElementById('menu-toggle');
	let navMenu = document.getElementById('nav-menu');
	
	if(menuToggle && navMenu)
	{
		menuToggle.addEventListener('click', 
		function()
		{
			navMenu.classList.toggle('active');
			menuToggle.classList.toggle('active');
		}
								   );
		
		// Close the menu when clicking outside
		document.addEventListener('click',
		 function(event)
	  	{
			if(!navMenu.contains(event.target) && !menuToggle.contains(event.target))
				{
					navMenu.classList.remove('active');
					menuToggle.classList.remove('active');
				}
		}
								 );
	}
})();
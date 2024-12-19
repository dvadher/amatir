

         $('.menu_icon').click(function () {
             $('.nav_list').toggleClass('show_menu');
         });



		   // Select all the nav_drop elements
		   const navItems = document.querySelectorAll('.nav_drop');
         
		   // Add a click event listener to each nav_drop
		   navItems.forEach(item => {
		   item.addEventListener('click', function () {
		   // Close all other nav_drop elements
		   navItems.forEach(otherItem => {
		   if (otherItem !== item) {
		   otherItem.classList.remove('drop_show');
		   }
		   });
		   
		   // Toggle the 'active' class on the clicked nav_drop
		   this.classList.toggle('drop_show');
		   });
		   });
     
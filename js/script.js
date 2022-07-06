const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsContent = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(item){
    item.addEventListener("click",function(){
        let currentBtn = item;
        let contentId = currentBtn.getAttribute('data-tab');
        let currentContent = document.querySelector(contentId);
        console.log(currentContent);

        if (!currentBtn.classList.contains('active')){
            tabsBtn.forEach(function(item){
                item.classList.remove('active');
            });
            tabsContent.forEach(function(item){
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentContent.classList.add('active');
        }
    });
});

document.querySelector('.tabs__nav-btn:nth-child(2)').click();
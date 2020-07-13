document.addEventListener('DOMContentLoaded', function () {
    initCatalog();
    let catalogItems = document.querySelectorAll(".catalog-item");


    catalogItems.forEach((item) => {
        let clone = item.cloneNode(true);

        clone.classList.add("swiper-slide");
        document.querySelector(".swiper-wrapper").appendChild(clone);
        initCatalog();
    });

    let swiper = new Swiper.default('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20,
        observer: true,
        observeParents: true,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
    });

    document.querySelector(".slider-next").addEventListener('click', () => {
        swiper.slideNext();
    });
    document.querySelector(".slider-prev").addEventListener('click', () => {
        swiper.slidePrev();
    });


});

$(window).resize(function () {
    // let catalogItems = document.querySelectorAll(".catalog-item");

    // if ($(this).width() <= 992) {
    //     catalogItems.forEach((item) => {
    //         document.getElementById("catalog-mobile").appendChild(item);
    //     });
    // }
});

function initCatalog() {
    let previewCatalogItems = document.querySelectorAll(".nerf-gun-thumbnail");

    let catalogItemTitle = document.querySelector("#catalogItemTitle"),
        catalogItemImgContainer = document.querySelector("#catalogItemImgContainer"),
        catalogItemDesc = document.querySelector("#catalogItemDesc");

    previewCatalogItems.forEach((previewCatalogItem) => {
        previewCatalogItem.addEventListener('click', (e) => {
            let currentPreviewCatalogItem = e.target,
                currentCatalogItemImg = currentPreviewCatalogItem.dataset
                .catalogItemImg,
                currenntCatalogItemTitle = currentPreviewCatalogItem.dataset
                .catalogItemTitle,
                currentCatalogItemDesc = currentPreviewCatalogItem.dataset
                .catalogItemDesc,
                catalogItemImg = document.querySelector("#catalogItemImg"),
                newCatalogItemImg = document.createElement("img");

            catalogItemImg.parentNode.removeChild(catalogItemImg);
            newCatalogItemImg.src = currentCatalogItemImg;
            newCatalogItemImg.classList.add("nerf-gun-lg");
            newCatalogItemImg.classList.add("showImage");
            newCatalogItemImg.id = "catalogItemImg";
            catalogItemImgContainer.appendChild(newCatalogItemImg);

            catalogItemTitle.textContent = currenntCatalogItemTitle;
            catalogItemDesc.textContent = currentCatalogItemDesc;
        });
    });
}

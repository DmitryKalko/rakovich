let pageId = document.querySelector("[data-id-page]").getAttribute("data-id-page"),
            navItem = document.querySelector(`[data-id-nav=${pageId}]`);

        if(pageId === navItem.getAttribute("data-id-nav")) {
            navItem.classList.add("active-link");
        }

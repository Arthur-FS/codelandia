
const Header = {

    init: function() {
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function() {
        this.$searchInput = document.querySelectorAll('#search')
        this.$heartIcons = document.querySelectorAll('#heart')
    },

    bindEvents: function() {
        const self = this

        this.$searchInput.forEach(function(research) {
            research.onclick = self.Events.searchInput_click
        }),
        this.$heartIcons.forEach(function(breast) {
            breast.onclick = self.Events.heartIcons_click
        })    
    },

    Events: {
        searchInput_click: function(e) {
            const div = e.target.parentElement
            const isDone = div.classList.contains('search-js')

            div.classList.add('search-js')
        },
        heartIcons_click: function(e) {
            const img = e.target.parentElement
            const isDone = img.classList.contains('heart-js') 

            if (isDone) {
                // return img.classList.remove('heart-js')
                img.classList.remove('heart-js')
            } else {
                img.classList.add('heart-js')
            }
        }
    }

}

Header.init()
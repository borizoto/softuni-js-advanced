function createSortedList1() {

    return {
        add(number) {
            if (typeof number !== "number") {
                return;
            }
            this._list.push(number);
            this._list.sort((a, b) => a - b);
            this.size = this._list.length;
        },

        remove(index) {
            if (index < 0 || index >= this._list.size) {
                return;
            }
            this._list.splice(index, 1);
            this._list.sort((a, b) => a - b);
            this.size = this._list.length;
        },

        get(index) {
            if (index < 0 || index >= this._list.length) {
                return;
            }
            return this._list[index];
        },

        size: 0,
        _list: []

    }
}




function createSortedList2() {

    return {
        add(number) {
            if (typeof number === "number") {
                this._list.push(number);
                this._list.sort((a, b) => a - b);
                this.size = this._list.length;
            }
        },

        remove(index) {
            if (!(index < 0 || index >= this._list.size)) {
                this._list.splice(index, 1);
                this._list.sort((a, b) => a - b);
                this.size = this._list.length;
            }
        },

        get(index) {
            if (!(index < 0 || index >= this._list.size)) {
                this.size = this._list.length;
                return this._list[index];
            }
        },

        size: 0,
        _list: []
    }
}
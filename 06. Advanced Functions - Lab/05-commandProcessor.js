function solution() {
    return {
        text: "",
        append(string) {
            this.text += string;
        },
        removeStart(index) {
            this.text = this.text.substring(index);
        },
        removeEnd(index) {
            this.text = this.text.substring(0, this.text.length - index)
        },
        print() {
            console.log(this.text)
        }
    }
}
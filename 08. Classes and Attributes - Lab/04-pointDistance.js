class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    static distance(point1, point2) {
        return Math.sqrt(((point2.x - point1.x) ** 2) + ((point2.y - point1.y) ** 2));
    }
}
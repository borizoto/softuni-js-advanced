function solution(command) {

    if (command === "upvote") {
        this.upvotes++;
    } else if (command === "downvote") {
        this.downvotes++;
    } else if (command === "score") {
        let reportedUpvotes = this.upvotes;
        let reportedDownvotes = this.downvotes;

        const totalVotes = this.upvotes + this.downvotes;

        if (totalVotes > 50) {
            reportedUpvotes = this.upvotes + Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
            reportedDownvotes = this.downvotes + Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);
        }

        const balance = this.upvotes - this.downvotes;

        function getRating() {
            if (totalVotes < 10) {
                return "new";
            } else if (this.upvotes > totalVotes * 0.66) {
                return "hot";
            } else if (balance >= 0 && totalVotes > 100) {
                return "controversial";
            } else if (balance < 0) {
                return "unpopular";
            }
            return "new";
        }

        return [reportedUpvotes, reportedDownvotes, balance, getRating.call(this)];
    }
}
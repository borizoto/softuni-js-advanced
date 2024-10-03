function constructionCrew(obj) {
    const worker = obj;
    if (!worker.dizziness) {
        return worker;
    }

    worker.levelOfHydrated += worker.weight * worker.experience * 0.1;
    worker.dizziness = false;
    return worker;  
}
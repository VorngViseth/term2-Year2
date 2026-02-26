export default function Statistic({data}) {
    const avg = findAvg(data);
    const min = findMin(data);
    const max = findMax(data);

    return (
        <table>
            <thead>
                <tr>
                    <th>AVERAGE</th>
                    <th>MIN</th>
                    <th>MAX</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{avg}</td>
                    <td>{min}</td>
                    <td>{max}</td>
                </tr>
            </tbody>
        </table>
    );
}

function findAvg(dataSet) {
    var maxScore = 0;
    var max = 0;

    for (const item of dataSet){
        maxScore += item.score;
        max++ ;    }

    return (maxScore / max).toFixed(2);
}

function findMin(dataSet) {
    var minScore = dataSet[0].score;

    for (const item of dataSet)
        if(item.score < minScore) minScore = item.score;
    
    return minScore;
}

function findMax(dataSet) {
    var max = dataSet[0].score;

    for (const item of dataSet)
        if(item.score > max) max = item.score;
    
    return max;
}
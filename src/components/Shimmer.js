const Shimmer = () => {
    const shimmerCount = 10;

    // 1st Method
    // const arr = [];
    // for(let i=0;i<shimmerCount;i++) {
    //     arr.push(i);
    // }

    // 2nd Method
    // const arr = Array.from({length: shimmerCount})
    // return (
    //     <div className="shimmer-container">
    //         {arr.map((_,index) => (
    //             <div key={index} className="shimmer-card" />
    //         ))}
    //     </div>
    // )

    return (
        <div className="shimmer-container">
            {Array.from({length: shimmerCount}).map((_,i) => (
                <div key={i} className="shimmer-card" />
            ))}
        </div>
    )
}

export default Shimmer;
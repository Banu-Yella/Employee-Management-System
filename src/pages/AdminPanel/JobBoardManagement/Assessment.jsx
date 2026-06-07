import React from 'react'

const Assessment = () => {

  let [assessment, setAssessment] = useState([]);

  let fetchData = async () => {
    let res = await axios.get("/GetAllAssessments")
    console.log(res.data);

    let data = res;
    setAssessment(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Job Title</th>
            <th>Assessment name</th>
            <th>Total score</th>
            <th>Qualifying score</th>
            <th>Assessment stage</th>            
            <th>Assessment type</th>
            <th>Assessment result</th>
            <th>Feedback</th>
            <th>Assessment status</th>
            <th>Created at</th>
            <th>Updated at</th>            
          </tr>
        </thead>
        <tbody>
          {
            assessment.map((value) => {
              return (                
                <tr key={value.assessmentId}>
                  <tr>{value.assessmentId}</tr>
                  <tr>{value.job?.jobTitle}</tr>
                  <tr>{value.assessmentName}</tr>
                  <tr>{value.totalScore}</tr>
                  <tr>{value.qualifyingScore}</tr>
                  <tr>{value.assessmentStage}</tr>
                  <tr>{value.assessmentType}</tr>
                  <tr>{value.assessmentResult}</tr>
                  <tr>{value.feedback}</tr>                  
                  <tr>{value.assessmentStatus}</tr>
                  <tr>{value.createdAt}</tr>
                  <tr>{value.updatedAt}</tr>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Assessment

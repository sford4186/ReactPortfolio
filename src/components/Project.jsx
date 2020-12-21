const Project = props => {
    return (
        <>
            <div className="card col-md-4 p-1 m-1">
                <img src={props.details.image} className="card-img-top" alt="project1" />
                <div className="card-body">
                    <h5 className="card-title">{props.details.name}</h5>
                    <p className="card-text">{props.details.description}</p>
                    <a href={props.details.deployed} className="btn btn-primary" style={{"backgroundColor":"purple"}}>View
            Site</a>
                    <a href={props.details.github} className="btn btn-primary"
                        style={{"backgroundColor":"purple"}}>Github</a>
                </div>
            </div>
        </>
    )
}
export default Project;
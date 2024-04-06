function BotAI() {
    return (
        <div className="page-content-wrap">
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-header">
                            <h3>
                                <center>Simple ChatGPT API Example</center>
                            </h3>
                        </div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label htmlFor="urs">Ask me a question:</label>
                                <input type="text" className="form-control" id="question" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="pad">Here's your answer:</label>
                                <textarea className="form-control" id="answer" rows={5}></textarea>
                            </div>
                        </div>
                        <div className="panel-footer">
                            <button type="button" className="btn btn-primary" id="send">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BotAI;

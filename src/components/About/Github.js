import React from "react";
import GitHubCalendar from "react-github-calendar";
import {Row} from "react-bootstrap";

function Github() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <GitHubCalendar
                username="skydrige"
                blockSize={15}
                blockMargin={5}
                theme={{
                    background: "transparent",
                    text: "#000",
                    grade4: "#8400b8",
                    grade3: "#b300d6",
                    grade2: "#e600f3",
                    grade1: "#ff1aff",
                    grade0: "#ff80ff",
                }}
            />
        </Row>
    );
}

export default Github;

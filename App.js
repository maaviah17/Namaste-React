// this is us just creating a react element not yet a tag
const heading = React.createElement(
        "h1", { id : "heading"}, 
        "heyyy did this by myself !"
        );

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)


const para = React.createElement("p", {id:"parag"}, "hello this is a p tag in html that i have created used react");
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(para);



const parent = React.createElement("div", {id:"parent"}, 
        React.createElement("div", {id:"child"},
                [React.createElement("h1", {id:"first"}, ("i'm a h1 tag")),
                React.createElement("h2", {id:"second"}, ("i'm a h2 tag"))
        ]
        
        )

)

root.render(parent);
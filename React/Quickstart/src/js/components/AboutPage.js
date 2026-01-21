// import Button from "./Button";

// function AboutPage() {
//     let content = {
//         title: 'About',
//         text: 'Hello there. How do you do?'
//     }

//     let styles = {
//         textAlign: 'center',
//         backgroundColor: 'pink'
//     }
//   return (
//     // <>
//     //   <h1>{content.title}</h1>
//     //   <p style={styles}>{`${content.text}????`}</p>
//     // </>
//     <>
//     <h1>{content.title}</h1>
//     <p>{content.text}</p>
//     <Button />
//     </>
//   );
// }

// export default AboutPage;


import Button from "./Button";

function AboutPage(){
    let content = {
        title: "About",
        text: "This is about our company page"
    }

    return (
        <>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
            <Button startCount={0} step={1} />
        </>
    );
}

export default AboutPage;
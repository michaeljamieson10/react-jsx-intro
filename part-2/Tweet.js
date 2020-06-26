function Tweet(props) {
return <p>Hi {props.message} Username: {props.wroteUsername} Name {props.wroteName} Date of tweet: {props.dateOfTweet}</p>;

}

// Tweet.defaultProps = {
//     from: "Joel"
//   };
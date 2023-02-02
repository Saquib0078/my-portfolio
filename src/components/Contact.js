import React ,{useState}from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make API call here
    fetch("http://localhost:3000/form-submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }

  return (


    <div id="contact">
    <h1 className="title" id="contactMe">Contact Me</h1>


      <form id="form"onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
           type="text"
           className="form-control"
           id="name"
           placeholder="Enter your name"
           value={formData.name}
           onChange={handleChange}
           required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
     <div className="getintouch">
     <h2 >Get in Touch</h2>
     <h3>____________</h3>
  <p>I am a full-stack developer with expertise in Node.js, Express, MongoDB, MySQL, and React.<br/> I have a passion for constantly expanding my knowledge and learning new technologies to <br/>improve my skills and provide the best solutions for my clients. I am dedicated and determined <br/>to stay up-to-date with the latest advancements in the industry, and I am eager to continue <br/>growing as a developer.</p>
  <p>My Name<br/> Mohammad Saquib</p>
  <p>Email<br/> saquibparvez007@gmail.com</p>
  <p>Address<br/> Akola,Maharashtra</p>
  <p>Feel free to reach out to me for any opportunities</p>
     </div>

    </div>
    
    

  )
}

export default Contact

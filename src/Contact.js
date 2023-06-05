import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    input[type=text] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      box-sizing: border-box;
      border: none;
      background-color: #3CBC8D;
      color: black;
    }

    input[type=email] {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      box-sizing: border-box;
      border: none;
      background-color: #3CBC8D;
      color: black;
    }

  textarea{
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      box-sizing: border-box;
      border: none;
      background-color: #3CBC8D;
      color: black;
    }


    .common-heading{
      color:black;
    
    }
    .new-column{
      display:grid;
      grid-template-columns: repeat(2, 1fr);
      padding-left:20px;
    }

    .container {
      margin-top: 3rem;
      

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            background:black;
           

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: black;
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>
      <div className="new-column">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7339379.821751449!2d63.762535347270344!3d26.07666171737615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3427d4e84eb%3A0x992cbc11f7e39643!2sRajasthan%20Tech!5e0!3m2!1sen!2sin!4v1685808007241!5m2!1sen!2sin"   title="Example Website" width="100%" height="550" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


        <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/xlekyjnb" method="POST" className="contact-inputs">
              <input  type="text" placeholder="username" name="username" required autoComplete="off"
              />

              <input type="email" name="Email" placeholder="Email" autoComplete="off" required />

              <textarea name="Message" cols="30" rows="10" required autoComplete="off" placeholder="Enter you message"></textarea>
              <input type="submit" value="send" />
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;

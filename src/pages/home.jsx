import Banner from "../components/banner/banner";
import Feature from "../components/feature/feature";
import iconChat from "../assets/icon-chat.png";
import iconMoney from "../assets/icon-money.png";
import iconSecurity from "../assets/icon-security.png";
import React from "react";

function Home() {
  return (
    <React.Fragment>
      <main>
        <Banner />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Feature
            image={iconChat}
            imgDescription="Chat Icon"
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <Feature
            image={iconMoney}
            imgDescription="Chat Icon"
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
          />
          <Feature
            image={iconSecurity}
            imgDescription="Chat Icon"
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money is always safe."
          />
        </section>
      </main>
    </React.Fragment>
  );
}

export default Home;

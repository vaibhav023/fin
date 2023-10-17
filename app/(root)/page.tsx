import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Info from "@/components/home/Info";
import InfoType2 from "@/components/home/InfoType2";
import Contact from "@/components/Contact"
import { InfoType3 } from "@/components/home/InfoType2";
const Home = () => {
  return (
    <div className="flex flex-col bg-[#F5F7FA]">
      <Hero />
      <div className="bg-white w-full">
      <Features />
      </div>
      <Info
        textFirst={true}
        image="/images/image1.svg"
        title="Our Payment Gateway"
        data={[
          {
            title: "Seamlessness and Ease of Use:",
            description:
              "Our payment gateway is designed to be intuitive and easy to integrate with your website or mobile app.",
          },
          {
            title: "Multiple Payment Methods:",
            description:
              "Our payment gateway is designed to be intuitive and easy to integrate with your website or mobile app.",
          },
          {
            title: "Global Reach:",
            description:
              "Our payment gateway is designed to be intuitive and easy to integrate with your website or mobile app.",
          },
          {
            title: "Robust Security:",
            description:
              "Our payment gateway is designed to be intuitive and easy to integrate with your website or mobile app.",
          },
        ]}
      />
      
      <Info
        textFirst={false}
        image="/images/image2.svg"
        title="We believe that payments should be effortless and secure"
        data={[
          {
            title: "",
            description:
              "Our team of experts is passionate about empowering businesses to thrive in the digital world by offering a robust, user-friendly, and reliable payment gateway.",
          },
          {
            title: "",
            description:
              "We are dedicated to staying ahead of the curve in technology and security, ensuring that your customers' data and transactions are protected at all times.",
          },
        ]}
      />
      <div className="bg-[#DFD1F4] m-6 rounded-lg">
      <InfoType2
        textFirst={true}
        title="Merchant Hosting"
        data={[
          {
            title: "Hosting Merchant Account Solutions",
            description:
              "The merchant hosted local storefront (full) lets you direct customers to your website when they click on your local inventory ads and free listings. By directing customers to your website instead of your Google-hosted local storefront, you can manage and track your customers' entire experience.",
          },
         
        ]}
        code_data="curl -X POST &quot;https://test.finixpe.in/_payment<br />-H &quot;accept: application/json&quot; -H &quot;Content-Type: application/x-www-form-urlencoded&quot; -d &quot;key=JP***g&amp;txnid=txnid89315771360&amp;amount=10.00&amp;firstname=Ashish&amp;email=test@gmail.com&amp;phone=9876543210&amp;productinfo=iPhone&amp;pg=TESTPG&amp;bankcode=TESTPGNB&amp;surl=https://test-payment-middleware.payu.in/simulatorResponse&amp;furl=https://test-payment-middleware.finixpe.in/simulatorResponse&amp;hash=e8fde1b3fe55483f55047a28f0594fda7cb0fe7c510eb7a0adb8bba3094cc904c49c34e7d2f8a828b539f3410de34203c4dd58ceba9bd3be3de4eb7ef9982093&quot;"
      />
      </div>
      <div className="bg-[#DFC9C0] m-6 rounded-lg">
      <InfoType3
       
        textFirst={false}
        title="FinixPe Hosted"
        data={[
          {
            title: "Steps of FinixPe Hosted",
            description:
              'Step 1: Make the Transaction Request to finixPe. Make the transaction request to the finixPe Test server...\nStep 2: Customer Submits Payment Details on finixPe Page. Customer selects the appropriate payment option (Credit Card, Debit Card, Net Banking, etc.) ...\nStep 3: Validate the Response From finixPe. ...\nStep 4: Verify the Payment.',
          },
         
        ]}
        code_data="curl -X POST &quot;https://test.finixpe.in/_payment&quot;
        -H &quot;Content-Type: application/x-www-form-urlencoded&quot; -d &quot;key=JP***g&txnid=txnid130958752736&amount=10.00&firstname=PayU User&email=test@gmail.com&phone=9876543210&productinfo=iPhone&surl=https://test-payment-middleware.finixpe.in/simulatorResponse&furl=https://test-payment-middleware.finixpe.in/simulatorResponse&hash=fd907b341ee39447fdf9e29522a9ce69a6b7d62af1d420eb60a0661ec67bb4dc9fdf7ba663cabb99d7436a0d67a4b9ca1f561d3a6e2df7c19cd9307e2c42b30e&quot;"
       
      />
      </div>
      <div className="bg-[#DFF3F6] m-6 rounded-lg">
      <InfoType2
     
        textFirst={true}
        title="Server-to-Server"
        data={[
          {
            title: "FinixPe Server-to-Server",
            description:
              'The Server-to-Server integration is performed at the server level, that is, your server (merchant server) and FinixPe server. The transaction is initiated from your server; hence redirection hop is eliminated.',
          },
         
        ]}
        code_data="curl -X POST &quot;https://test.finixpe.in/_payment
        -H &quot;accept: application/json&quot; -H &quot;Content-Type: application/x-www-form-urlencoded&quot; -d &quot;key=JP***g&txnid=txnid42811231360&amount=10.00&firstname=Ashish&email=test@gmail.com&phone=9876543210&productinfo=iPhone&pg=TESTPG&bankcode=TESTPGNB&txn_s2s_flow=4&surl=https://test-payment-middleware.finixpe.in/simulatorResponse&furl=https://test-payment-middleware.finixpe.in/simulatorResponse&hash=de8a3e0566e03c2f95a3eb7f61dd7bef4522076a8f3a90d1d443ae75dedb256729f0709959eb09edd5e8f77b1d95826b72951f396ea7d9c57adbbc5a201a87f4&quot;"
       
      />
      </div>
      
      <div id="Contact">
      <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;

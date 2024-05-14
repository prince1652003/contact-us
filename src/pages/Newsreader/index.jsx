import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading } from "../../components";
import "./st.css";

export default function NewsreaderPage() {
  return (
    <>
      <div className="flex w-full flex-col gap-[45px] bg-white-A700 pt-[17px]">
        <div className="flex flex-col items-center">
          <Text className=" ml-[265px] mt-[57px] self-start md:ml-0">
            <div className=" flex w-screen " >
            <span className="!text-red-A700 font-black">Contact&nbsp;</span>
            <span className="!text-red-A700 font-black">Us&nbsp;</span>
            <input className="border-2 border-red-A700 h-0 w-5/12 rounded-md mt-3.5 mt-neg-20" type="name" />
            
            </div>
            
            
            
          </Text>

          {/* main news section */}
          <div className="mx-auto mt-[17px] w-full max-w-[1379px] md:p-5">
            <div className="flex items-start md:flex-col">
              <div className="ml-9 mt-3.5 flex flex-1 flex-col items-start md:ml-0 md:self-stretch">
                <Text
                  size="lg"
                  as="p"
                  className="w-full capitalize leading-[52px]"
                >
                  Office Address : सोनभद्र उत्तरप्रदेश
                </Text>
                <Text
                  size="lg"
                  as="p"
                  className="w-full capitalize leading-[52px]"
                >
                  Contact Us : +91 9415873885
                </Text>
                <Text
                  size="lg"
                  as="p"
                  className="w-full capitalize leading-[52px]"
                >
                  Email : info.janpadnewslive@gmail.com
                </Text>

                <div className="border-2 border-slate-950 w-11/12 h-4/5 pl-6 pt-2 pr-6 mt-8 rounded-md">
                  <div className="">
                    <label className="ml-20%">
                      <Text
                        size="lg"
                        as="p"
                        className="w-full capitalize leading-[52px]"
                      >
                        Name
                      </Text>
                    </label>
                    <input className="border-2 border-black h-12 rounded-md mt-0 mt-neg-20" type="name" />
                  </div>

                  <div className="">
                    <label className="ml-20%">
                      <Text
                        size="lg"
                        as="p"
                        className="w-full capitalize leading-[52px]"
                      >
                        Email
                      </Text>
                    </label>
                    <input className="border-2 border-black h-12 rounded-md mt-neg-20" type="name" />
                  </div>

                  <div className="">
                  <label className="ml-20%">
                      <Text
                        size="lg"
                        as="p"
                        className="w-full capitalize leading-[52px]"
                      >
                        Message
                      </Text>
                    </label>
                    <input className="border-2 border-black h-60 rounded-md mt-neg-20" type="name" />
                    
                  </div>
                  <button className="bg-indigo-900 text-white-A700 font-bold mt-6 mb-6 text-lg py-4 px-8 rounded">
      send
    </button>

                </div>
              </div>

              {/* additional reading section */}
              <div className="ml-2.5 mt-[17px] flex w-[26%] flex-col gap-[31px] md:ml-0 md:w-full">
                <Img
                  src="images/img_rectangle_15.png"
                  alt="sidebar image top"
                  className="h-[250px] object-cover"
                />
                <Img
                  src="images/img_rectangle_16.png"
                  alt="sidebar image bottom"
                  className="h-[355px] object-cover"
                />
                <div className="flex flex-col items-center rounded-[5px] bg-white-A700 pb-[21px] shadow-sm sm:pb-5">
                  <div className="flex w-[88%] flex-col gap-[19px] md:w-full md:p-5">
                    <div className="flex items-center gap-1.5">
                      <Heading
                        size="s"
                        as="h1"
                        className="capitalize !text-red-A700"
                      >
                        यह भी पढ़े
                      </Heading>
                      <div className="mb-4 h-[5px] flex-1 self-end bg-red-A700" />
                    </div>
                    <div className="grid grid-cols-1 justify-center gap-px">
                      <div className="flex w-full">
                        <div className="flex w-full flex-col gap-3.5">
                          <div className="flex items-center gap-2.5">
                            <Img
                              src="images/img_rectangle_18.png"
                              alt="news item image"
                              className="h-[90px] w-[90px] rounded-[3px] object-cover"
                            />
                            <Text
                              size="s"
                              as="p"
                              className="w-[69%] capitalize leading-[121%]"
                            >
                              चुनाव आयोग ने BRS पार्टी अध्यक्ष KCR पर 48 घंटे का
                              प्रतिबंध लगाया, नहीं कर पाएंगे चुनावी रैली
                            </Text>
                          </div>
                          <div className="h-px bg-black-900_3f" />
                        </div>
                      </div>
                      <div className="flex w-full items-center gap-2.5">
                        <Img
                          src="images/img_rectangle_18.png"
                          alt="additional news image"
                          className="h-[90px] w-[90px] rounded-[3px] object-cover"
                        />
                        <Text
                          size="s"
                          as="p"
                          className="w-[69%] capitalize leading-[121%]"
                        >
                          चुनाव आयोग ने BRS पार्टी अध्यक्ष KCR पर 48 घंटे का
                          प्रतिबंध लगाया, नहीं कर पाएंगे चुनावी रैली
                        </Text>
                      </div>
                      <div className="flex w-full flex-col gap-[13px]">
                        <div className="h-px bg-black-900_3f" />
                        <div className="flex items-center gap-2.5">
                          <Img
                            src="images/img_rectangle_18.png"
                            alt="image"
                            className="h-[90px] w-[90px] rounded-[3px] object-cover"
                          />
                          <Text
                            size="s"
                            as="p"
                            className="w-[69%] capitalize leading-[121%]"
                          >
                            चुनाव आयोग ने BRS पार्टी अध्यक्ष KCR पर 48 घंटे का
                            प्रतिबंध लगाया, नहीं कर पाएंगे चुनावी रैली
                          </Text>
                        </div>
                        <div className="h-px bg-black-900_3f" />
                      </div>
                      <div className="flex w-full flex-col gap-3.5">
                        <div className="flex items-center gap-2.5">
                          <Img
                            src="images/img_rectangle_18.png"
                            alt="image"
                            className="h-[90px] w-[90px] rounded-[3px] object-cover"
                          />
                          <Text
                            size="s"
                            as="p"
                            className="w-[69%] capitalize leading-[121%]"
                          >
                            चुनाव आयोग ने BRS पार्टी अध्यक्ष KCR पर 48 घंटे का
                            प्रतिबंध लगाया, नहीं कर पाएंगे चुनावी रैली
                          </Text>
                        </div>
                        <div className="h-px bg-black-900_3f" />
                      </div>
                      <div className="flex w-full items-center gap-2.5">
                        <Img
                          src="images/img_rectangle_18.png"
                          alt="image"
                          className="h-[90px] w-[90px] rounded-[3px] object-cover"
                        />
                        <Text
                          size="s"
                          as="p"
                          className="w-[69%] capitalize leading-[121%]"
                        >
                          चुनाव आयोग ने BRS पार्टी अध्यक्ष KCR पर 48 घंटे का
                          प्रतिबंध लगाया, नहीं कर पाएंगे चुनावी रैली
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

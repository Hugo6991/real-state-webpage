import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'


const Contact = () => {
  return (
    <section className="c-wrapper">
         <div className='paddingds innerWidth flexCenter c-container'>
            {/* left side */}
            <div className='flexColStart c-left'>
                <span className="orangeText">Our Contact</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better </span>

                {/* contact card */}
                <div className='flexColStart contactModes'>
                    {/* first raw */}
                    <div className='flexStart row'>
                        {/* first mode */}
                        <div className='flexCenter mode'>
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                    <MdCall size={25} />
                                </div>

                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            
                            <div className='flexCenter button'>Call Now</div>
                        </div>

                        {/* second mode */}
                        <div className='flexCenter mode'>
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                    <MdCall size={25} />
                                </div>

                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            
                            <div className='flexCenter button'>Call Now</div>
                        </div>
                    </div>

                    {/* second raw */}
                    <div className='flexStart row'>
                        {/* first mode */}
                        <div className='flexCenter mode'>
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                    <MdCall size={25} />
                                </div>

                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            
                            <div className='flexCenter button'>Call Now</div>
                        </div>

                        {/* second mode */}
                        <div className='flexCenter mode'>
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                    <MdCall size={25} />
                                </div>

                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>021 123 145 14</span>
                                </div>
                            </div>
                            
                            <div className='flexCenter button'>Call Now</div>
                        </div>
                    </div>

                    {/* end */}

                </div>
            </div>

            {/* right side */}
            <div className='flexEnd c-right'>
                <div className='image-container'>
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
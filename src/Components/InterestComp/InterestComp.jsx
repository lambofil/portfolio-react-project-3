import React from 'react'
import './InterestComp.css'

function InterestComp() {
  return (
    <div className="interests container1">
        <div className='pad'>
            <div className="interest-title">
                <h2 className='h-two'>Interests</h2>
            </div>

            <div className='interest-row'>

                <div className='interest-row-flex1'>
                    <div className='interest-col'>
                        <div class="icon-box">
                            <i class="fa fa-html5" aria-hidden="true" style={{color:'#ffbb2c'}}></i>
                            <h3>HTML</h3>
                        </div>
                    </div>
                    <div className='interest-col'>
                        <div class="icon-box">
                            <i class="fa-brands fa-css3-alt" style={{color:'#87CEEB'}}></i>
                            <h3>CSS</h3>
                        </div>
                    </div>
                    <div className='interest-col'>
                        <div class="icon-box">
                            <i class="fa-brands fa-square-js" style={{color:'#9B2242'}}></i>
                            <h3>JAVASCRIPT</h3>
                        </div>
                    </div>
                    <div className='interest-col'>
                        <div class="icon-box">
                            <i class="fa-brands fa-angular" style={{color:'#00bfff'}}></i>
                            <h3>ANGULAR</h3>
                        </div>
                    </div>
                    
                </div>
                    
                <div className='interest-row-flex2'>
                    <div className='interest-col'>
                        <div class="icon-box">
                            <i class="fa-brands fa-react" style={{color:'#7d00b3'}}></i>
                            <h3>REACTJS</h3>
                        </div>
                    </div>
                    <div className='interest-col'>
                        <div class="icon-box">
                            <i class="fa-brands fa-bootstrap" style={{color:'#ff7f50'}}></i>
                            <h3>BOOTSTRAP</h3>
                        </div>
                    </div>
                    <div className='interest-col'>
                        <div class="icon-box">
                            <i class="fa-brands fa-python" style={{color:'#2dd9d0'}}></i>
                            <h3>PYTHON</h3>
                        </div>
                    </div>
                    <div className='interest-col'>
                        <div class="icon-box">
                            <i class="fa-brands fa-github" style={{color:'#ffff66'}}></i>
                            <h3>GIT-HUB</h3>
                        </div>
                    </div>
                </div>

                <div className='interest-row-flex3'>
                    <div className='interest-col'>
                        <div class="icon-box">
                            <i class="fa-brands fa-vuejs" style={{color:'#94b80b'}}></i>
                            <h3>VUE</h3>
                        </div>
                    </div>
                    <div className='interest-col'>
                        <div class="icon-box">
                            <i class="fa-brands fa-docker" style={{color:'#FFA500'}}></i>
                            <h3>DOCKER</h3>
                        </div>
                    </div>
                    <div className='interest-col'>
                        <div class="icon-box">
                            <i class="fa-solid fa-flask" style={{color:'#32cd32'}}></i>
                            <h3>FLASK</h3>
                        </div>
                    </div>
                    <div className='interest-col'>
                        <div class="icon-box">
                            <i class="fa-solid fa-database" style={{color:'#bfbd70'}}></i>
                            <h3>POSTGRESQL</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default InterestComp
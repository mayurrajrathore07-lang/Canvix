import React from "react";
import "./Testimonial.css";

const profile = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80";

function Testimonial() {
    return (
        <section className="testimonial">
            <div className="testimonial-container">
                <img src={profile} alt="Profile" className="testimonial-img" />

                <h2 className="testimonial-text">
                    “Be genuine in your assessment, and provide constructive feedback to
                    benefit both potential customers and the company providing the product
                    or service.”
                </h2>

                <h3 className="testimonial-name">Jacqueline Miller</h3>

                <p className="testimonial-role">CEO of an eduport</p>

                <div className="testimonial-buttons">
                    <button className="btn prev">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>

                    <button className="btn next">
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
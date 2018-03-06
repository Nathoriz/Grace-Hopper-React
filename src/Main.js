import React, { Component } from 'react';
import './Main.css';

class Main extends Component {

    render() {

        const aboutP = this.props.about.map((parrafo, index)=> {
            return <p key={index}> {parrafo}</p>
        })

        return (
            <main>
              {/* <p>
                <strong>Grace Brewster Murray Hopper</strong>(<a href="https://en.wikipedia.org/wiki/Given_name#Name_at_birth">née</a> <strong>Murray</strong>; December 9, 1906 – January 1, 1992) was an American <a href="https://en.wikipedia.org/wiki/Computer_scientist">computer scientist</a> and <a href="https://en.wikipedia.org/wiki/United_States_Navy">United States Navy</a> <a href="https://en.wikipedia.org/wiki/Rear_admiral_(United_States)">rear admiral</a>.[1] One of the first programmers of the <a href="https://en.wikipedia.org/wiki/Harvard_Mark_I">Harvard Mark I</a> computer, she was a pioneer of computer programming who invented one of the first <a href="https://en.wikipedia.org/wiki/Compiler">compiler</a> related tools. She popularized the idea of machine-independent programming languages, which led to the development of <a href="https://en.wikipedia.org/wiki/COBOL">COBOL</a>, an early <a href="https://en.wikipedia.org/wiki/High-level_programming_language">high-level programming language</a> still in use today.
              </p>

              <p>
                Hopper had attempted to enlist in the Navy during <a href="https://en.wikipedia.org/wiki/World_War_II">World War II</a>, but she was rejected by the military because she was 34 years of age and too old to enlist. She instead joined the Navy Reserves. Hopper began her computing career when she worked on the Harvard Mark I team that was led by <a href="https://en.wikipedia.org/wiki/Howard_H._Aiken">Howard H. Aiken</a>. In 1949, she joined the <a href="https://en.wikipedia.org/wiki/Eckert–Mauchly_Computer_Corporation">Eckert–Mauchly Computer Corporation</a> and was part of the development team that designed the <a href="https://en.wikipedia.org/wiki/UNIVAC_I">UNIVAC I</a> computer in 1944. It was at Eckert–Mauchly that she began developing the compiler. She believed that computer code could be written in English by using a programming language that was based on English words. The compiler would convert that code into <a href="https://en.wikipedia.org/wiki/Machine_code">machine code</a> that would be understood by computers. By 1952, Hopper finished her program <a href="https://en.wikipedia.org/wiki/Linker_(computing)">linker</a> (originally called a compiler), which was written for the <a href="https://en.wikipedia.org/wiki/A-0_System">A-0 System</a>.[2][3][4][5]
             </p>

              <p>
                In 1954, Eckert–Mauchly chose Hopper to lead their department for automatic programming, and she led the release of some of the first compiled languages like <a href="https://en.wikipedia.org/wiki/FLOW-MATIC">FLOW-MATIC</a>. In 1959, she participated in the <a href="https://en.wikipedia.org/wiki/CODASYL">CODASYL</a> consortium, which consulted Hopper to guide them in creating a machine-independent programming language. This led to the <a href="https://en.wikipedia.org/wiki/COBOL">COBOL</a> language, which was inspired by her idea of a language being based on English words. In 1966, she retired from the Naval Reserve, but in 1967, the Navy recalled her to active duty. She retired from the Navy in 1986 and found work as a consultant for the <a href="https://en.wikipedia.org/wiki/Digital_Equipment_Corporation">Digital Equipment Corporation</a>, sharing her computing experiences.
              </p>

              <p>
                Owing to her accomplishments and her naval rank, she was sometimes referred to as "Amazing Grace".[6][7] The U.S. Navy <a href="https://en.wikipedia.org/wiki/Arleigh_Burke-class_destroyer"><i>Arleigh Burke-class</i></a> guided-missile destroyer <a href="https://en.wikipedia.org/wiki/USS_Hopper">USS Hopper</a> was named for her, as was the <a href="https://en.wikipedia.org/wiki/Cray_XE6">Cray XE6</a> "Hopper" supercomputer at <a href="https://en.wikipedia.org/wiki/National_Energy_Research_Scientific_Computing_Center">NERSC</a>.[8] During her lifetime, Hopper was awarded 40 honorary degrees from universities across the world. A <a href="https://en.wikipedia.org/wiki/Hopper_College">college</a> at <a href="https://en.wikipedia.org/wiki/Yale_University">Yale University</a> is named in her honor. In 1991, she received the <a href="https://en.wikipedia.org/wiki/National_Medal_of_Technology_and_Innovation">National Medal of Technology</a>. On November 22, 2016, she was posthumously awarded the <a href="https://en.wikipedia.org/wiki/Presidential_Medal_of_Freedom">Presidential Medal of Freedom</a> by President <a href="https://en.wikipedia.org/wiki/Barack_Obama">Barack Obama</a>.[9]
              </p> */}
              {aboutP}
            </main>
        )
    }
}

export default Main;








interface QuizData {
  classes: ClassLevel[];
}

export const quizData: QuizData = {
  classes: [
    {
      id: "jee",
      name: "JEE Preparation",
      subjects: [
        {
          id: "jee_math",
          name: "Mathematics",
          questions: [
            {
              id: "jee_math_1",
              text: "If the roots of the equation x² + px + q = 0 are in the ratio 1:2, then which of the following is true?",
              options: ["p² = 9q", "p² = 4q", "p² = 6q", "p² = 8q"],
              correctAnswer: "p² = 9q"
            },
            {
              id: "jee_math_2",
              text: "The value of ∫(1/x)dx from 1 to e is:",
              options: ["1", "e", "ln(e)", "e-1"],
              correctAnswer: "1"
            },
            {
              id: "jee_math_3",
              text: "If vectors a, b, c are coplanar, then |a·(b×c)| equals:",
              options: ["1", "0", "a+b+c", "None of these"],
              correctAnswer: "0"
            }
          ]
        },
        {
          id: "jee_physics",
          name: "Physics",
          questions: [
            {
              id: "jee_physics_1",
              text: "A body is thrown vertically upward with velocity v₀. The time taken to reach maximum height is:",
              options: ["v₀/g", "v₀/2g", "2v₀/g", "g/v₀"],
              correctAnswer: "v₀/g"
            },
            {
              id: "jee_physics_2",
              text: "The equivalent resistance between points A and B in an infinite network of 1Ω resistors is:",
              options: ["1/2 Ω", "2/3 Ω", "1 Ω", "2 Ω"],
              correctAnswer: "2/3 Ω"
            },
            {
              id: "jee_physics_3",
              text: "The momentum of a photon of wavelength λ is:",
              options: ["hλ", "h/λ", "hc/λ", "λ/h"],
              correctAnswer: "h/λ"
            }
          ]
        },
        {
          id: "jee_chemistry",
          name: "Chemistry",
          questions: [
            {
              id: "jee_chem_1",
              text: "Which quantum number determines the orientation of orbital in space?",
              options: ["Principal", "Azimuthal", "Magnetic", "Spin"],
              correctAnswer: "Magnetic"
            },
            {
              id: "jee_chem_2",
              text: "The IUPAC name of CH₃-CH=CH-CHO is:",
              options: ["But-2-enal", "But-3-enal", "But-1-enal", "Butanal"],
              correctAnswer: "But-2-enal"
            },
            {
              id: "jee_chem_3",
              text: "The hybridization of carbon in benzene is:",
              options: ["sp", "sp²", "sp³", "dsp²"],
              correctAnswer: "sp²"
            }
          ]
        }
      ]
    },
    {
      id: "neet",
      name: "NEET Preparation",
      subjects: [
        {
          id: "neet_physics",
          name: "Physics",
          questions: [
            {
              id: "neet_physics_1",
              text: "If force (F), velocity (V) and time (T) are taken as fundamental units, then the dimensions of mass are:",
              options: ["[F V T^-1]", "[F V T^-2]", "[F V^-1 T^-1]", "[F V^-1 T]"],
              correctAnswer: "[F V T^-1]"
            },
            {
              id: "neet_physics_2",
              text: "A projectile is fired from the surface of the earth with a velocity of 5 ms^-1 and angle θ with the horizontal. Another projectile fired from another planet with a velocity of 3 ms^-1 at the same angle follows a trajectory which is identical with the trajectory of the projectile fired from the earth. The value of the acceleration due to gravity on the planet is (in ms^-2): (given g = 9.8 ms^-2)",
              options: ["3.5", "5.9", "16.3", "110.8"],
              correctAnswer: "3.5"
            },
            {
              id: "neet_physics_3",
              text: "A particle is moving such that its position coordinates (x,y) are (2 m, 3 m) at time t = 0, (6 m, 7 m) at time t = 2 s and (13 m, 14 m) at time t = 5s. Average velocity vector (Vav) from t = 0 to t = 5 s is:",
              options: ["15 (13i + 14j)", "7/3 (i + j)", "2 (i + j)", "11/5 (i + j)"],
              correctAnswer: "11/5 (i + j)"
            },
            {
              id: "neet_physics_4",
              text: "A system consists of three masses m1, m2 and m3 connected by a string passing over a pulley P. The mass m1 hangs freely and m2 and m3 are on a rough horizontal table (the coefficient of friction = μ). The pulley is frictionless and of negligible mass. The downward acceleration of mass m1 is: (Assume m1 = m2 = m3 = m)",
              options: ["g (1 - gμ) / 9", "2gμ / 3", "g (1 - 2μ) / 3", "g (1 - 2μ) / 2"],
              correctAnswer: "g (1 - 2μ) / 3"
            },
            {
              id: "neet_physics_5",
              text: "The force ‘F’ acting on a particle of mass ‘m’ is indicated by the force – time graph shown below. The change in momentum of the particle over the time interval from zero to 8 s is:",
              options: ["24 Ns", "20 Ns", "12 Ns", "6 Ns"],
              correctAnswer: "12 Ns"
            },
            {
              id: "neet_physics_6",
              text: "A balloon with mass ‘m’ is descending down with an acceleration ‘a’ (where a < g). How much mass should be removed from it so that it starts moving up with an acceleration ‘a’?",
              options: ["2ma / (g + a)", "2ma / (g - a)", "ma / (g + a)", "ma / (g - a)"],
              correctAnswer: "2ma / (g + a)"
            },
            {
              id: "neet_physics_7",
              text: "A body of mass (4m) is lying in x-y plane at rest. It suddenly explodes into three pieces. Two pieces each of mass (m) move perpendicular to each other with equal speeds (v). The total kinetic energy generated due to explosion is:",
              options: ["mυ^2", "3/2 mυ^2", "2 mυ^2", "4 mυ^2"],
              correctAnswer: "2 mυ^2"
            },
            {
              id: "neet_physics_8",
              text: "The oscillation of a body on a smooth horizontal surface is represented by the equation, X = A cos (ωt). Which one of the following graphs shows correctly the variation ‘a’ with ‘t’? (a = acceleration at time t, T = time period)",
              options: ["Graph 1", "Graph 2", "Graph 3", "Graph 4"],
              correctAnswer: "Graph 3"
            },
            {
              id: "neet_physics_9",
              text: "A solid cylinder of mass 50 g and radius 0.5 m is free to rotate about the horizontal axis. A massless string is wound round the cylinder with one end attached to it and other hanging freely. Tension in the string required to produce an angular acceleration of 2 revolutions s^-2 is:",
              options: ["25 N", "50 N", "78.5 N", "157 N"],
              correctAnswer: "78.5 N"
            },
            {
              id: "neet_physics_10",
              text: "The ratio of the accelerations for a solid sphere (mass ‘m’ and radius ‘R’) rolling down an incline of angle ‘θ’ without slipping and slipping down the incline without rolling is:",
              options: ["5 : 7", "2 : 3", "2 : 5", "7 : 5"],
              correctAnswer: "5 : 7"
            },
            {
              id: "neet_physics_11",
              text: "A black hole is an object whose gravitational field is so strong that even light cannot escape from it. To what approximate radius would earth (mass = 5.98 x 10^24 kg) have to be compressed to be a black hole?",
              options: ["10^-9 m", "10^-6 m", "10^-2 m", "100 m"],
              correctAnswer: "10^-2 m"
            },
            {
              id: "neet_physics_12",
              text: "Dependence of intensity of gravitational field (E) of earth with distance (r) from centre of earth is correctly represented by:",
              options: ["Graph 1", "Graph 2", "Graph 3", "Graph 4"],
              correctAnswer: "Graph 2"
            },
            {
              id: "neet_physics_13",
              text: "Copper of fixed volume ‘V’ is drawn into wire of length ‘l’. When the wire is subjected to a constant force ‘F’, the extension produced in the wire is 'Δl'. Which of the following graphs is a straight line?",
              options: ["Δl versus 1/l", "Δl versus l^2", "Δl versus 1/l^2", "Δl versus l"],
              correctAnswer: "Δl versus l^2"
            },
            {
              id: "neet_physics_14",
              text: "A certain number of spherical drops of liquid of radius ‘r’ coalesce to form a single drop of radius ‘R’ and volume ‘V’. If ‘T’ is the surface tension of the liquid, then:",
              options: ["Energy = 4VT (1/r - 1/R) is released", "Energy = 3VT (1/r + 1/R) is absorbed", "Energy = 3VT (1/r - 1/R) is released", "Energy is neither released nor absorbed"],
              correctAnswer: "Energy = 3VT (1/r - 1/R) is released"
            },
            {
              id: "neet_physics_15",
              text: "Steam at 100°C is passed into 20 g of water at 10°C. When water acquires a temperature of 80°C, the mass of water present will be: [Take specific heat of water = 1 cal g^-1 °C^-1 and latent heat of steam = 540 cal g^-1]",
              options: ["24 g", "31.5 g", "42.5 g", "22.5 g"],
              correctAnswer: "22.5 g"
            }
          ]
        },
        {
          id: "neet_chemistry",
          name: "Chemistry",
          questions: [
            {
              id: "neet_chemistry_1",
              text: "What is the maximum number of orbitals that can be identified with the following quantum numbers? n = 3, l = 1, ml = 0",
              options: ["1", "2", "3", "4"],
              correctAnswer: "1"
            },
            {
              id: "neet_chemistry_2",
              text: "Calculate the energy in joule corresponding to light of wavelength 45 nm: (Planck’s constant h = 6.63 x 10^-34 Js; speed of light c = 3 x 10^8 ms^-1)",
              options: ["6.67 x 10^15", "6.67 x 10^11", "4.42 x 10^-15", "4.42 x 10^-18"],
              correctAnswer: "4.42 x 10^-18"
            },
            {
              id: "neet_chemistry_3",
              text: "Equal masses of H2, O2 and methane have been taken in a container of volume V at temperature 27°C in identical conditions. The ratio of the volumes of gases H2 : O2 : methane would be:",
              options: ["8 : 16 : 1", "16 : 8 : 1", "16 : 1 : 2", "8 : 1 : 2"],
              correctAnswer: "16 : 1 : 2"
            },
            {
              id: "neet_chemistry_4",
              text: "If a is the length of the side of a cube, the distance between the body centered atom and one corner atom in the cube will be:",
              options: ["2/√3 a", "4/√3 a", "√3/4 a", "√3/2 a"],
              correctAnswer: "√3/2 a"
            },
            {
              id: "neet_chemistry_5",
              text: "Which property of colloids is not dependent on the charge on colloidal particles?",
              options: ["Coagulation", "Electrophoresis", "Electro-osmosis", "Tyndall effect"],
              correctAnswer: "Tyndall effect"
            },
            {
              id: "neet_chemistry_6",
              text: "Which of the following salts will give highest pH in water?",
              options: ["KCl", "NaCl", "Na2CO3", "CuSO4"],
              correctAnswer: "Na2CO3"
            },
            {
              id: "neet_chemistry_7",
              text: "Of the following 0.10 aqueous solutions, which one will exhibit the largest freezing point depression?",
              options: ["KCl", "C6H12O6", "Al2(SO4)3", "K2SO4"],
              correctAnswer: "Al2(SO4)3"
            },
            {
              id: "neet_chemistry_8",
              text: "When 22.4 litres of H2(g) is mixed with 11.2 litres of Cl2(g), each at S.T.P, the moles of HCl(g) formed is equal to:",
              options: ["1 mol of HCl(g)", "2 mol of HCl(g)", "0.5 mol of HCl(g)", "1.5 mol of HCl(g)"],
              correctAnswer: "1 mol of HCl(g)"
            },
            {
              id: "neet_chemistry_9",
              text: "When 0.1 mol MnO4^2- is oxidised the quantity of electricity required to completely oxidize MnO4^2- to MnO4^- is:",
              options: ["96500 C", "2 x 96500 C", "9650 C", "96.50 C"],
              correctAnswer: "9650 C"
            },
            {
              id: "neet_chemistry_10",
              text: "Using the Gibbs energy change, ΔG° = +63.3 kJ, for the following reaction, Ag2CO3(s) ⇌ 2 Ag^+(aq) + CO3^2-(aq). The Ksp of Ag2CO3(s) in water at 25°C is: (R = 8.314 J K^-1 mol^-1)",
              options: ["3.2 x 10^-26", "8.0 x 10^-12", "2.9 x 10^-3", "7.9 x 10^-2"],
              correctAnswer: "8.0 x 10^-12"
            },
            {
              id: "neet_chemistry_11",
              text: "The weight of silver (at.wt = 108) displaced by a quantity of electricity which displaces 5600 mL of O2 at STP will be:",
              options: ["5.4 g", "10.8 g", "54.0 g", "108.0 g"],
              correctAnswer: "108.0 g"
            },
            {
              id: "neet_chemistry_12",
              text: "Which of the following statements is correct for the spontaneous adsorption of a gas?",
              options: ["ΔS is negative and, therefore, ΔH should be highly positive", "ΔS is negative and therefore, ΔH should be highly negative", "ΔS is positive and therefore, ΔH should be negative", "ΔS is positive and, therefore, ΔH should also be highly positive"],
              correctAnswer: "ΔS is negative and therefore, ΔH should be highly negative"
            },
            {
              id: "neet_chemistry_13",
              text: "For the reversible reaction: N2(g) + 3H2(g) ⇌ 2NH3(g) + heat. The equilibrium shifts in forward direction:",
              options: ["By increasing the concentration of NH3(g)", "By decreasing the pressure", "By decreasing the concentration of N2(g) and H2(g)", "By increasing pressure and decreasing temperature"],
              correctAnswer: "By increasing pressure and decreasing temperature"
            },
            {
              id: "neet_chemistry_14",
              text: "For the reaction: X2O4(l) → 2XO2(g), ΔU = 2.1 kcal, ΔS = 20 cal K^-1 at 300 K. Hence, ΔG is:",
              options: ["2.7 kcal", "-2.7 kcal", "9.3 kcal", "-9.3 kcal"],
              correctAnswer: "-2.7 kcal"
            },
            {
              id: "neet_chemistry_15",
              text: "For a given exothermic reaction, Kp and K’p are the equilibrium constants at temperatures T1 and T2, respectively. Assuming that heat of reaction is constant in temperature range between T1 and T2, it is readily observed that:",
              options: ["Kp > K’p", "Kp < K’p", "Kp = K’p", "Kp = 1/K’p"],
              correctAnswer: "Kp > K’p"
            }
          ]
        },
        {
          id: "neet_biology",
          name: "Biology",
          questions: [
            {
              id: "neet_bio_1",
              text: "Which one of the following shows isogamy with non-flagellated gametes?",
              options: ["Sargassum", "Ectocarpus", "Ulothrix", "Spirogyra"],
              correctAnswer: "Spirogyra"
            },
            {
              id: "neet_bio_2",
              text: "Five kingdom system of classification suggested by R.H. Whittaker is not based on:",
              options: ["Presence or absence of a well-defined nucleus", "Mode of reproduction", "Mode of nutrition", "Complexity of body organization"],
              correctAnswer: "Mode of reproduction"
            },
            {
              id: "neet_bio_3",
              text: "Which one of the following fungi contains hallucinogens?",
              options: ["Morchella esculenta", "Amanita muscaria", "Neurospora sp.", "Ustilago sp."],
              correctAnswer: "Amanita muscaria"
            },
            {
              id: "neet_bio_4",
              text: "Archaebacteria differ from eubacteria in:",
              options: ["Cell membrane structure", "Mode of nutrition", "Cell shape", "Mode of reproduction"],
              correctAnswer: "Cell membrane structure"
            },
            {
              id: "neet_bio_5",
              text: "Which one of the following is wrong about Chara?",
              options: ["Upper oogonium and lower round antheridium", "Globule and nucule present on the same plant", "Upper antheridium and lower oogonium", "Globule is male reproductive structure"],
              correctAnswer: "Upper antheridium and lower oogonium"
            },
            {
              id: "neet_bio_6",
              text: "Which of the following is responsible for peat formation?",
              options: ["Marchantia", "Riccia", "Funaria", "Sphagnum"],
              correctAnswer: "Sphagnum"
            },
            {
              id: "neet_bio_7",
              text: "Placenta and pericarp are both edible portions in:",
              options: ["Apple", "Banana", "Tomato", "Potato"],
              correctAnswer: "Tomato"
            },
            {
              id: "neet_bio_8",
              text: "When the margins of sepals or petals overlap one another without any particular direction, the condition is termed as:",
              options: ["Vexillary", "Imbricate", "Twisted", "Valvate"],
              correctAnswer: "Imbricate"
            },
            {
              id: "neet_bio_9",
              text: "You are given a fairly old piece of dicot stem and a dicot root. Which of the following anatomical structures will you use to distinguish between the two?",
              options: ["Secondary xylem", "Secondary phloem", "Protoxylem", "Cortical cells"],
              correctAnswer: "Protoxylem"
            },
            {
              id: "neet_bio_10",
              text: "Which one of the following statements is correct?",
              options: ["The seed in grasses is not endospermic", "Mango is a parthenocarpic fruit", "A proteinaceous aleurone layer is present in maize grain", "A sterile pistil is called a staminode"],
              correctAnswer: "A proteinaceous aleurone layer is present in maize grain"
            },
            {
              id: "neet_bio_11",
              text: "Tracheids differ from other tracheary elements in:",
              options: ["Having Casparian strips", "Being imperforate", "Lacking nucleus", "Being lignified"],
              correctAnswer: "Being imperforate"
            },
            {
              id: "neet_bio_12",
              text: "An example of edible underground stem is:",
              options: ["Carrot", "Groundnut", "Sweet potato", "Potato"],
              correctAnswer: "Potato"
            },
            {
              id: "neet_bio_13",
              text: "Which structure performs the function of mitochondria in bacteria?",
              options: ["Nucleoid", "Ribosomes", "Cell wall", "Mesosomes"],
              correctAnswer: "Mesosomes"
            },
            {
              id: "neet_bio_14",
              text: "The solid linear cytoskeletal elements having a diameter of 6 nm and made up of a single type of monomer are known as:",
              options: ["Microtubules", "Microfilaments", "Intermediate filaments", "Lamins"],
              correctAnswer: "Microfilaments"
            },
            {
              id: "neet_bio_15",
              text: "The osmotic expansion of a cell kept in water is chiefly regulated by:",
              options: ["Mitochondria", "Vacuoles", "Plastids", "Ribosomes"],
              correctAnswer: "Vacuoles"
            }
          ]
        }
      ]
    }
  ]
};

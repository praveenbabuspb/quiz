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
            },
            {
              id: "neet_physics_16",
              text: "Certain quantity of water cools from 70°C to 60°C in the first 5 minutes and to 54°C in the next 5 minutes. The temperature of the surroundings is:",
              options: ["45°C", "20°C", "42°C", "10°C"],
              correctAnswer: "45°C"
            },
            {
              id: "neet_physics_17",
              text: "A monoatomic gas at pressure P, having a volume V expands isothermally to a volume 2V and then adiabatically to a volume 16V. The final pressure of the gas is: (take γ = 5/3)",
              options: ["64 P", "32 P", "P/64", "16 P"],
              correctAnswer: "P/64"
            },
            {
              id: "neet_physics_18",
              text: "A thermodynamic system undergoes cyclic process ABCDA as shown in Fig. The work done by the system in the cycle is:",
              options: ["P0V0", "2 P0V0", "P0V0/2", "Zero"],
              correctAnswer: "Zero"
            },
            {
              id: "neet_physics_19",
              text: "The mean free path of molecules of a gas, (radius r) is inversely proportional to:",
              options: ["r^3", "r^2", "r", "√r"],
              correctAnswer: "r^2"
            },
            {
              id: "neet_physics_20",
              text: "If n₁, n₂ and n₃ are the fundamental frequencies of three segments into which a string is divided, the original fundamental frequency n of the string is given by:",
              options: ["1/n = 1/n1 + 1/n2 + 1/n3", "1/n = 1/n1 + 1/n2 + 1/n3", "n = n1 + n2 + n3", "n = n1 + n2 + n3"],
              correctAnswer: "1/n = 1/n1 + 1/n2 + 1/n3"
            },
            {
              id: "neet_physics_21",
              text: "The number of possible natural oscillations of air column in a pipe closed at one end of length 85 cm whose frequencies lie below 1250 Hz are: (velocity of sound = 340 ms^-1)",
              options: ["4", "5", "7", "6"],
              correctAnswer: "6"
            },
            {
              id: "neet_physics_22",
              text: "A speeding motorcyclist sees traffic jam ahead of him. He slows down to 36 km/hour. He finds the traffic has eased and a car moving ahead of him at 18 km/hour is honking at a frequency of 1392 Hz. The speed of sound is 343 m/s, the frequency of the honk as heard by him will be:",
              options: ["1332 Hz", "1372 Hz", "1412 Hz", "1454 Hz"],
              correctAnswer: "1412 Hz"
            },
            {
              id: "neet_physics_23",
              text: "Two thin dielectric slabs of dielectric constants K1 and K2 (K1 < K2) are inserted between plates of a parallel plate capacitor as shown in the figure. The variation of electric field ‘E’ between the plates with distance ‘d’ as measured from plate P is correctly shown by:",
              options: ["Graph 1", "Graph 2", "Graph 3", "Graph 4"],
              correctAnswer: "Graph 2"
            },
            {
              id: "neet_physics_24",
              text: "A conducting sphere of radius R is given a charge Q. The electric potential and the electric field at the centre of the sphere respectively are:",
              options: ["Zero and Q / (4πε₀ R^2)", "Q / (4πε₀ R) and Zero", "Q / (4πε₀ R) and Q / (4πε₀ R^2)", "Both are zero"],
              correctAnswer: "Q / (4πε₀ R) and Zero"
            },
            {
              id: "neet_physics_25",
              text: "In a region the potential is represented by V(x,y,z) = 6x – 8xy – 8y + 6yz, where V is in volts and x, y, z are in meters. The electric force experienced by a charge of 2 coulomb situated at point (1,1,1) is:",
              options: ["6√5 N", "30 N", "24 N", "4√35 N"],
              correctAnswer: "24 N"
            },
            {
              id: "neet_physics_26",
              text: "Two cities are 150 km apart. Electric power is sent from one city to another city through copper wires. The fall of potential per km is 8 volt and the average resistance per km is 0.5 Ω. The power loss in the wire is:",
              options: ["19.2 W", "19.2 kW", "19.2 J", "12.2 kW"],
              correctAnswer: "19.2 kW"
            },
            {
              id: "neet_physics_27",
              text: "The resistances in the two arms of the meter bridge are 5 Ω and R Ω respectively. When the resistance R is shunted with an equal resistance, the new balance point is at 1.6l₁. The resistance ‘R’ is:",
              options: ["10 Ω", "15 Ω", "20 Ω", "25 Ω"],
              correctAnswer: "15 Ω"
            },
            {
              id: "neet_physics_28",
              text: "A potentiometer circuit has been set up for finding the internal resistance of a given cell. The main battery, used across the potentiometer wire, has an emf of 2.0 V and a negligible internal resistance. The potentiometer wire itself is 4 m long. When the resistance R connected across the given cell, has values of (1) Infinity (2) 9.5 Ω, the ‘balancing lengths’ on the potentiometer wire are found to be 3m and 2.85 m, respectively. The value of internal resistance of the cell is:",
              options: ["0.25 Ω", "0.95 Ω", "0.5 Ω", "0.75 Ω"],
              correctAnswer: "0.5 Ω"
            },
            {
              id: "neet_physics_29",
              text: "Following figures show the arrangement of bar magnets in different configurations. Each magnet has magnetic dipole moment m. Which configuration has highest net magnetic dipole moment?",
              options: ["Configuration a", "Configuration b", "Configuration c", "Configuration d"],
              correctAnswer: "Configuration d"
            },
            {
              id: "neet_physics_30",
              text: "In an ammeter 0.2% of main current passes through the galvanometer. If resistance of galvanometer is G, the resistance of ammeter will be:",
              options: ["1/499 G", "499/500 G", "1/500 G", "500/499 G"],
              correctAnswer: "1/500 G"
            },
            {
              id: "neet_physics_31",
              text: "Two identical long conducting wires AOB and COD are placed at right angle to each other, with one above other such that ‘O’ is their common point for the two. The wires carry I₁ and I₂ currents, respectively. Point ‘P’ is lying at distance ‘d’ from ‘O’ along a direction perpendicular to the plane containing the wires. The magnetic field at the point ‘P’ will be:",
              options: ["μ₀ / (2πd) (I₁ / I₂)", "μ₀ / (2πd) (I₁ + I₂)", "μ₀ / (2πd) (I₁^2 - I₂^2)", "μ₀ / (2πd) (I₁^2 + I₂^2)^(1/2)"],
              correctAnswer: "μ₀ / (2πd) (I₁^2 + I₂^2)^(1/2)"
            },
            {
              id: "neet_physics_32",
              text: "A thin semicircular conducting ring (PQR) of radius ‘r’ is falling with its plane vertical in a horizontal magnetic field B, as shown in figure. The potential difference developed across the ring when its speed is v, is:",
              options: ["Zero", "Bvπr^2/2 and P is at higher potential", "πrBv and R is at higher potential", "2rBv and R is at higher potential"],
              correctAnswer: "2rBv and R is at higher potential"
            },
            {
              id: "neet_physics_33",
              text: "A transformer having efficiency of 90% is working on 200 V and 3 kW power supply. If the current in the secondary coil is 6A, the voltage across the secondary coil and the current in the primary coil respectively are:",
              options: ["300 V, 15 A", "450 V, 15 A", "450 V, 13.5 A", "600 V, 15 A"],
              correctAnswer: "450 V, 15 A"
            },
            {
              id: "neet_physics_34",
              text: "Light with an energy flux of 25 x 10^4 Wm^-2 falls on a perfectly reflecting surface at normal incidence. If the surface area is 15 cm^2, the average force exerted on the surface is:",
              options: ["1.25 x 10^-6 N", "2.50 x 10^-6 N", "1.20 x 10^-6 N", "3.0 x 10^-6 N"],
              correctAnswer: "2.50 x 10^-6 N"
            },
            {
              id: "neet_physics_35",
              text: "A beam of light of λ = 600 nm from a distant source falls on a single slit 1 mm wide and the resulting diffraction pattern is observed on a screen 2 m away. The distance between first dark fringes on either side of the central bright fringe is:",
              options: ["1.2 cm", "1.2 mm", "2.4 cm", "2.4 mm"],
              correctAnswer: "2.4 mm"
            },
            {
              id: "neet_physics_36",
              text: "In the Young’s double-slit experiment, the intensity of light at a point on the screen where the path difference is λ is K, (λ being the wavelength of light used). The intensity at a point where the path difference is λ/4 will be:",
              options: ["K", "K/4", "K/2", "Zero"],
              correctAnswer: "K/2"
            },
            {
              id: "neet_physics_37",
              text: "If the focal length of objective lens is increased then magnifying power of:",
              options: ["Microscope will increase but that of telescope decrease", "Microscope and telescope both will increase", "Microscope and telescope both will decrease", "Microscope will decrease but that of telescope will increase"],
              correctAnswer: "Microscope will increase but that of telescope decrease"
            },
            {
              id: "neet_physics_38",
              text: "The angle of prism is ‘A’. One of its refracting surfaces is silvered. Light rays falling at an angle of incidence 2A on the first surface returns back through the same path after suffering reflection at the silvered surface. The refractive index μ of the prism is:",
              options: ["2 sin A", "2 cos A", "1/2 cos A", "tan A"],
              correctAnswer: "2 cos A"
            },
            {
              id: "neet_physics_39",
              text: "When the energy of the incident radiation is increased by 20%, the kinetic energy of the photoelectrons emitted from a metal surface increased from 0.5 eV to 0.8 eV. The work function of the metal is:",
              options: ["0.65 eV", "1.0 eV", "1.3 eV", "1.5 eV"],
              correctAnswer: "1.0 eV"
            },
            {
              id: "neet_physics_40",
              text: "If the kinetic energy of the particle is increased to 16 times its previous value, the percentage change in the de-Broglie wavelength of the particle is:",
              options: ["25", "75", "60", "50"],
              correctAnswer: "75"
            },
            {
              id: "neet_physics_41",
              text: "Hydrogen atom in ground state is excited by a monochromatic radiation of λ = 975 Å. Number of spectral lines in the resulting spectrum emitted will be:",
              options: ["3", "2", "6", "10"],
              correctAnswer: "6"
            },
            {
              id: "neet_physics_42",
              text: "The binding energy per nucleon of ⁷₃Li and ⁴₂He nuclei are 5.60 MeV and 7.06 MeV respectively. In the nuclear reaction ⁷₃Li + ¹₁H → ⁴₂He + ⁴₂He + Q, the value of energy Q released is:",
              options: ["19.6 MeV", "-2.4 MeV", "8.4 MeV", "17.3 MeV"],
              correctAnswer: "17.3 MeV"
            },
            {
              id: "neet_physics_43",
              text: "A radio isotope ‘X’ with a half life 1.4 x 10⁹ years decays to ‘Y’ which is stable. A sample of the rock from a cave was found to contain ‘X’ and ‘Y’ in the ratio 1:7. The age of the rock is:",
              options: ["1.96 x 10⁹ years", "3.92 x 10⁹ years", "4.20 x 10⁹ years", "8.40 x 10⁹ years"],
              correctAnswer: "3.92 x 10⁹ years"
            },
            {
              id: "neet_physics_44",
              text: "The given graph represents V-I characteristics for a semiconductor device. Which of the following statement is correct?",
              options: ["It is V-I characteristics for solar cell where point A represents open circuit voltage and point B short circuit current", "It is for a solar cell and points A and B represent open circuit voltage and current, respectively", "It is for a photodiode and points A and B represent open circuit voltage and current, respectively", "It is for LED and points A and B represent open circuit voltage and short circuit current, respectively"],
              correctAnswer: "It is V-I characteristics for solar cell where point A represents open circuit voltage and point B short circuit current"
            },
            {
              id: "neet_physics_45",
              text: "The barrier potential of a p-n junction depends on: (a) Type of semiconductor material, (b) Amount of doping, (c) Temperature. Which one of the following is correct?",
              options: ["(a) and (b) only", "(b) only", "(b) and (c) only", "(a), (b) and (c)"],
              correctAnswer: "(a), (b) and (c)"
            },
            {
              id: "neet_physics_46",
              text: "Which of the following acids is used to prevent hydrolysis of Fe^2+ ion?",
              options: ["Dilute nitric acid", "Dilute sulphuric acid", "Dilute hydrochloric acid", "Concentrated sulphuric acid"],
              correctAnswer: "Dilute nitric acid"
            },
            {
              id: "neet_physics_47",
              text: "The rate of a reaction quadruples when temperature changes from 27°C to 57°C. Calculate the energy of activation. Given R = 8.314 J K^-1 mol^-1, log 4 = 0.6021",
              options: ["3.80 kJ/mol", "3804 kJ/mol", "38.04 kJ/mol", "380.4 kJ/mol"],
              correctAnswer: "38.04 kJ/mol"
            },
            {
              id: "neet_physics_48",
              text: "The work done during reversible isothermal expansion of one mole of hydrogen gas at 25°C from pressure of 20 atmosphere to 10 atmosphere is: (Given R = 2.0 cal K^-1 mol^-1)",
              options: ["413.14 calories", "100 calories", "0 calorie", "-413.14 calories"],
              correctAnswer: "-413.14 calories"
            },
            {
              id: "neet_physics_49",
              text: "Mass in grams of copper deposited by passing 9.6487 A current through a voltmeter containing copper sulphate solution for 100 seconds is: (Given: Molar mass of Cu: 63 g mol^-1, 1F = 96487 C)",
              options: ["31.5 g", "0.0315 g", "3.15 g", "0.315 g"],
              correctAnswer: "0.315 g"
            },
            {
              id: "neet_physics_50",
              text: "Major products A and B formed in the following reaction sequence, are:",
              options: ["Structure 1", "Structure 2", "Structure 3", "Structure 4"],
              correctAnswer: "Structure 2"
            },
            {
              id: "neet_physics_51",
              text: "The pair of lanthanoid ions which are diamagnetic is:",
              options: ["Gd^3+ and Eu^3+", "Pm^3+ and Sm^3+", "Ce^4+ and Yb^2+", "Ce^3+ and Eu^2+"],
              correctAnswer: "Ce^4+ and Yb^2+"
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
            },
            {
              id: "neet_chemistry_16",
              text: "Which of the following orders of ionic radii is correctly represented?",
              options: ["H^- > H^+ > H", "Na^+ > F^- > O^2-", "F^- > O^2- > Na^+", "Al^3+ > Mg^2+ > N^3-"],
              correctAnswer: "F^- > O^2- > Na^+"
            },
            {
              id: "neet_chemistry_17",
              text: "1.0 g of magnesium is burnt with 0.56 g O2 in a closed vessel. Which reactant is left in excess and how much? (At.wt. Mg = 24; O = 16)",
              options: ["Mg, 0.16 g", "O2, 0.16 g", "Mg, 0.44 g", "O2, 0.28 g"],
              correctAnswer: "Mg, 0.16 g"
            },
            {
              id: "neet_chemistry_18",
              text: "The pair of compounds that can exist together is:",
              options: ["FeCl3, SnCl2", "HgCl2, SnCl2", "FeCl2, SnCl2", "FeCl3, KI"],
              correctAnswer: "FeCl2, SnCl2"
            },
            {
              id: "neet_chemistry_19",
              text: "Be^2+ is isoelectronic with which of the following ions?",
              options: ["H^+", "Li^+", "Na^+", "Mg^2+"],
              correctAnswer: "Li^+"
            },
            {
              id: "neet_chemistry_20",
              text: "Which of the following molecules has the maximum dipole moment?",
              options: ["CO2", "CH4", "NH3", "NF3"],
              correctAnswer: "NH3"
            },
            {
              id: "neet_chemistry_21",
              text: "Which one of the following species has plane triangular shape?",
              options: ["N3", "NO3^-", "NO2^-", "CO2"],
              correctAnswer: "NO3^-"
            },
            {
              id: "neet_chemistry_22",
              text: "Acidity of diprotic acids in aqueous solutions increases in the order:",
              options: ["H2S < H2Se < H2Te", "H2Se < H2S < H2Te", "H2Te < H2S < H2Se", "H2Se < H2Te < H2S"],
              correctAnswer: "H2S < H2Se < H2Te"
            },
            {
              id: "neet_chemistry_23",
              text: "(a) H2O2 + O3 → H2O + 2O2 (b) H2O2 + Ag2O → 2Ag + H2O + O2. Role of hydrogen peroxide in the above reactions is respectively:",
              options: ["Oxidizing in (a) and reducing in (b)", "Reducing in (a) and oxidizing in (b)", "Reducing in (a) and (b)", "Oxidizing in (a) and (b)"],
              correctAnswer: "Reducing in (a) and (b)"
            },
            {
              id: "neet_chemistry_24",
              text: "Artificial sweetener which is stable under cold conditions only is:",
              options: ["Saccharine", "Sucralose", "Aspartame", "Alitame"],
              correctAnswer: "Aspartame"
            },
            {
              id: "neet_chemistry_25",
              text: "In acidic medium, H2O2 changes Cr2O7^2- to CrO5 which has two (-O-O-) bonds. Oxidation state of Cr in CrO5 is:",
              options: ["+5", "+3", "+6", "-10"],
              correctAnswer: "+6"
            },
            {
              id: "neet_chemistry_26",
              text: "The reaction of aqueous KMnO4 with H2O2 in acidic conditions gives:",
              options: ["Mn^4+ and O2", "Mn^2+ and O2", "Mn^2+ and O3", "Mn^4+ and MnO2"],
              correctAnswer: "Mn^2+ and O2"
            },
            {
              id: "neet_chemistry_27",
              text: "Among the following complexes the one which shows zero crystal field stabilization energy (CFSE) is:",
              options: ["[Mn(H2O)6]^3+", "[Fe(H2O)6]^3+", "[Co(H2O)6]^2+", "[Co(H2O)6]^3+"],
              correctAnswer: "[Fe(H2O)6]^3+"
            },
            {
              id: "neet_chemistry_28",
              text: "Magnetic moment 2.83 BM is given by which of the following ions? (At.nos. Ti = 22, Cr = 24, Mn = 25, Ni = 28)",
              options: ["Ti^3+", "Ni^2+", "Cr^3+", "Mn^2+"],
              correctAnswer: "Ni^2+"
            },
            {
              id: "neet_chemistry_29",
              text: "Which of the following complexes is used as an anticancer agent?",
              options: ["mer-[Co(NH3)3Cl]", "cis-[PtCl2(NH3)2]", "cis-K2[PtCl2Br2]", "Na2CoCl4"],
              correctAnswer: "cis-[PtCl2(NH3)2]"
            },
            {
              id: "neet_chemistry_30",
              text: "Reason of lanthanoid contraction is:",
              options: ["Negligible screening effect of ‘f’ orbitals", "Increasing nuclear charge", "Decreasing nuclear charge", "Decreasing screening effect"],
              correctAnswer: "Negligible screening effect of ‘f’ orbitals"
            },
            {
              id: "neet_chemistry_31",
              text: "In the following reaction, the product (A) is:",
              options: ["Structure 1", "Structure 2", "Structure 3", "Structure 4"],
              correctAnswer: "Structure 2"
            },
            {
              id: "neet_chemistry_32",
              text: "Which of the following will be most stable diazonium salt RN2^+ X^-?",
              options: ["CH3N2^+X^-", "C6H5N2^+X^-", "CH3CH2N2^+X^-", "C6H5CH2N2^+X^-"],
              correctAnswer: "C6H5N2^+X^-"
            },
            {
              id: "neet_chemistry_33",
              text: "D (+) glucose reacts with hydroxyl amine and yields an oxime. The structure of the oxime would be:",
              options: ["Structure 1", "Structure 2", "Structure 3", "Structure 4"],
              correctAnswer: "Structure 2"
            },
            {
              id: "neet_chemistry_34",
              text: "Which of the following hormones is produced under the condition of stress which stimulates glycogenolysis in the liver of human beings?",
              options: ["Thyroxin", "Insulin", "Adrenaline", "Estradiol"],
              correctAnswer: "Adrenaline"
            },
            {
              id: "neet_chemistry_35",
              text: "Which one of the following is an example of a thermosetting polymer?",
              options: ["Structure 1", "Structure 2", "Structure 3", "Structure 4"],
              correctAnswer: "Structure 3"
            },
            {
              id: "neet_chemistry_36",
              text: "Which of the following organic compounds polymerizes to form the polyester Dacron?",
              options: ["Propylene and para HO-(C6H4)-OH", "Benzoic acid and ethanol", "Terephthalic acid and ethylene glycol", "Benzoic acid and para HO-(C6H4)-OH"],
              correctAnswer: "Terephthalic acid and ethylene glycol"
            },
            {
              id: "neet_chemistry_37",
              text: "Which one of the following is not a common component of photochemical smog?",
              options: ["Ozone", "Acrolein", "Peroxyacetyl nitrate", "Chlorofluorocarbons"],
              correctAnswer: "Chlorofluorocarbons"
            },
            {
              id: "neet_chemistry_38",
              text: "In the Kjeldahl’s method for estimation of nitrogen present in a soil sample, ammonia evolved from 0.75 g sample neutralized 10 mL of 1M H2SO4. The percentage of nitrogen in the soil is:",
              options: ["37.33", "45.33", "35.33", "43.33"],
              correctAnswer: "37.33"
            },
            {
              id: "neet_chemistry_39",
              text: "What products are formed when the following compound is treated with Br2 in the presence of FeBr3?",
              options: ["Structure 1", "Structure 2", "Structure 3", "Structure 4"],
              correctAnswer: "Structure 2"
            },
            {
              id: "neet_chemistry_40",
              text: "Which of the following compounds will undergo racemisation when solution of KOH hydrolyses?",
              options: ["(i) and (ii)", "(ii) and (iv)", "(iii) and (iv)", "(i) and (iv)"],
              correctAnswer: "(iii) and (iv)"
            },
            {
              id: "neet_chemistry_41",
              text: "Among the following sets of reactants which one produces anisole?",
              options: ["CH3CHO; RMgX", "C6H5OH; NaOH; CH3I", "C6H5OH; neutral FeCl3", "C6H5-CH3; CH3COCl; AlCl3"],
              correctAnswer: "C6H5OH; NaOH; CH3I"
            },
            {
              id: "neet_chemistry_42",
              text: "Which of the following will not be soluble in sodium hydrogen carbonate?",
              options: ["2,4,6-trinitrophenol", "Benzoic acid", "o-Nitrophenol", "Benzenesulphonic acid"],
              correctAnswer: "o-Nitrophenol"
            },
            {
              id: "neet_chemistry_43",
              text: "Which one is most reactive towards nucleophilic addition reaction?",
              options: ["Structure 1", "Structure 2", "Structure 3", "Structure 4"],
              correctAnswer: "Structure 4"
            },
            {
              id: "neet_chemistry_44",
              text: "Identify Z in the sequence of reactions: CH3CH2CH=CH2 →[HBr/H2O2] Y →[C2H5ONa] Z",
              options: ["CH3-(CH2)3-O-CH2CH3", "(CH3)2CH2-O-CH2CH3", "CH3(CH2)4-O-CH3", "CH3CH2-CH(CH3)-O-CH2CH3"],
              correctAnswer: "CH3-(CH2)3-O-CH2CH3"
            },
            {
              id: "neet_chemistry_45",
              text: "Which of the following organic compounds has same hybridization as its combustion product – (CO2)?",
              options: ["Ethane", "Ethyne", "Ethene", "Ethanol"],
              correctAnswer: "Ethyne"
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
            },
            {
              id: "neet_bio_16",
              text: "During which phase(s) of cell cycle, amount of DNA in a cell remains at 4C level if the initial amount is denoted as 2C?",
              options: ["G0 and G1", "G1 and S", "Only G2", "G2 and M"],
              correctAnswer: "G2 and M"
            },
            {
              id: "neet_bio_17",
              text: "Match the following and select the correct answer: (a) Centriole (i) Infoldings in mitochondria, (b) Chlorophyll (ii) Thylakoids, (c) Cristae (iii) Nucleic acids, (d) Ribozymes (iv) Basal body cilia or flagella",
              options: ["(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)", "(a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)", "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)", "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)"],
              correctAnswer: "(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)"
            },
            {
              id: "neet_bio_18",
              text: "Dr. F. Went noted that if coleoptile tips were removed and placed on agar for one hour, the agar would produce a bending when placed on one side of freshly-cut coleoptile stumps. Of what significance is this experiment?",
              options: ["It made possible the isolation and exact identification of auxin", "It is the basis for quantitative determination of small amounts of growth-promoting substances", "It supports the hypothesis that IAA is auxin", "It demonstrated polar movement of auxins"],
              correctAnswer: "It is the basis for quantitative determination of small amounts of growth-promoting substances"
            },
            {
              id: "neet_bio_19",
              text: "Deficiency symptoms of nitrogen and potassium are visible first in:",
              options: ["Senescent leaves", "Young leaves", "Roots", "Buds"],
              correctAnswer: "Senescent leaves"
            },
            {
              id: "neet_bio_20",
              text: "In which one of the following processes CO2 is not released?",
              options: ["Aerobic respiration in plants", "Aerobic respiration in animals", "Alcoholic fermentation", "Lactate fermentation"],
              correctAnswer: "Lactate fermentation"
            },
            {
              id: "neet_bio_21",
              text: "Anoxygenic photosynthesis is characteristic of:",
              options: ["Rhodospirillum", "Spirogyra", "Chlamydomonas", "Ulva"],
              correctAnswer: "Rhodospirillum"
            },
            {
              id: "neet_bio_22",
              text: "A few normal seedlings of tomato were kept in a dark room. After a few days they were found to have become white-coloured like albinos. Which of the following terms will you use to describe them?",
              options: ["Mutated", "Embolised", "Etiolated", "Defoliated"],
              correctAnswer: "Etiolated"
            },
            {
              id: "neet_bio_23",
              text: "Which one of the following growth regulators is known as ‘stress hormone’?",
              options: ["Abscisic acid", "Ethylene", "GA3", "Indole acetic acid"],
              correctAnswer: "Abscisic acid"
            },
            {
              id: "neet_bio_24",
              text: "Geitonogamy involves:",
              options: ["Fertilization of a flower by the pollen from another flower of the same plant", "Fertilization of a flower by the pollen from the same flower", "Fertilization of a flower by the pollen from a flower of another plant in the same population", "Fertilization of a flower by the pollen from a flower of another plant belonging to a distant population"],
              correctAnswer: "Fertilization of a flower by the pollen from another flower of the same plant"
            },
            {
              id: "neet_bio_25",
              text: "Male gametophyte with least number of cells is present in:",
              options: ["Pteris", "Funaria", "Lilium", "Pinus"],
              correctAnswer: "Lilium"
            },
            {
              id: "neet_bio_26",
              text: "An aggregate fruit is one which develops from:",
              options: ["Multicarpellary syncarpous gynoecium", "Multicarpellary apocarpous gynoecium", "Complete inflorescence", "Multicarpellary superior ovary"],
              correctAnswer: "Multicarpellary apocarpous gynoecium"
            },
            {
              id: "neet_bio_27",
              text: "Pollen tablets are available in the market for:",
              options: ["In vitro fertilization", "Breeding programmes", "Supplementing food", "Ex situ conservation"],
              correctAnswer: "Supplementing food"
            },
            {
              id: "neet_bio_28",
              text: "Function of filiform apparatus is to:",
              options: ["Recognize the suitable pollen at stigma", "Stimulate division of generative cell", "Produce nectar", "Guide the entry of pollen tube"],
              correctAnswer: "Guide the entry of pollen tube"
            },
            {
              id: "neet_bio_29",
              text: "Non-albuminous seed is produced in:",
              options: ["Maize", "Castor", "Wheat", "Pea"],
              correctAnswer: "Pea"
            },
            {
              id: "neet_bio_30",
              text: "Which of the following shows coiled RNA strand and capsomers?",
              options: ["Polio virus", "Tobacco mosaic virus", "Measles virus", "Retrovirus"],
              correctAnswer: "Tobacco mosaic virus"
            },
            {
              id: "neet_bio_31",
              text: "Which one of the following is wrongly matched?",
              options: ["Transcription – Writing information from DNA to t-RNA", "Translation – Using information in m-RNA to make protein", "Repressor protein – Binds to operator to stop enzyme synthesis", "Operon – Structural genes, operator and promoter"],
              correctAnswer: "Transcription – Writing information from DNA to t-RNA"
            },
            {
              id: "neet_bio_32",
              text: "Transformation was discovered by:",
              options: ["Meselson and Stahl", "Hershey and Chase", "Griffith", "Watson and Crick"],
              correctAnswer: "Griffith"
            },
            {
              id: "neet_bio_33",
              text: "Fruit colour in squash is an example of:",
              options: ["Recessive epistasis", "Dominant epistasis", "Complementary genes", "Inhibitory genes"],
              correctAnswer: "Dominant epistasis"
            },
            {
              id: "neet_bio_34",
              text: "Viruses have:",
              options: ["DNA enclosed in a protein coat", "Prokaryotic nucleus", "Single chromosome", "Both DNA and RNA"],
              correctAnswer: "DNA enclosed in a protein coat"
            },
            {
              id: "neet_bio_35",
              text: "The first human hormone produced by recombinant DNA technology is:",
              options: ["Insulin", "Estrogen", "Thyroxin", "Progesterone"],
              correctAnswer: "Insulin"
            },
            {
              id: "neet_bio_36",
              text: "An analysis of chromosomal DNA using the Southern hybridization technique does not use:",
              options: ["Electrophoresis", "Blotting", "Autoradiography", "PCR"],
              correctAnswer: "PCR"
            },
            {
              id: "neet_bio_37",
              text: "In vitro propagation in plants is characterized by:",
              options: ["PCR and RAPD", "Northern blotting", "Electrophoresis and HPLC", "Microscopy"],
              correctAnswer: "None (Correct: Tissue culture, not listed)"
            },
            {
              id: "neet_bio_38",
              text: "An alga which can be employed as food for human being is:",
              options: ["Ulothrix", "Chlorella", "Spirogyra", "Polysiphonia"],
              correctAnswer: "Chlorella"
            },
            {
              id: "neet_bio_39",
              text: "Which vector can clone only a small fragment of DNA?",
              options: ["Bacterial artificial chromosome", "Yeast artificial chromosome", "Plasmid", "Cosmid"],
              correctAnswer: "Plasmid"
            },
            {
              id: "neet_bio_40",
              text: "An example of ex situ conservation is:",
              options: ["National park", "Seed bank", "Wildlife sanctuary", "Sacred grove"],
              correctAnswer: "Seed bank"
            },
            {
              id: "neet_bio_41",
              text: "A location with luxuriant growth of lichens on the trees indicates that the:",
              options: ["Trees are very healthy", "Trees are heavily infested", "Location is highly polluted", "Location is not polluted"],
              correctAnswer: "Location is not polluted"
            },
            {
              id: "neet_bio_42",
              text: "Match the following and select the correct option: (a) Earthworm (i) Pioneer species, (b) Succession (ii) Detritivore, (c) Ecosystem service (iii) Natality, (d) Population growth (iv) Pollination",
              options: ["(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)", "(a)-(iv), (b)-(i), (c)-(ii), (d)-(iii)", "(a)-(iii), (b)-(ii), (c)-(iv), (d)-(i)", "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)"],
              correctAnswer: "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)"
            },
            {
              id: "neet_bio_43",
              text: "A species facing extremely high risk of extinction in the immediate future is called:",
              options: ["Vulnerable", "Endemic", "Critically Endangered", "Extinct"],
              correctAnswer: "Critically Endangered"
            },
            {
              id: "neet_bio_44",
              text: "The zone of atmosphere in which the ozone layer is present is called:",
              options: ["Ionosphere", "Mesosphere", "Stratosphere", "Troposphere"],
              correctAnswer: "Stratosphere"
            },
            {
              id: "neet_bio_45",
              text: "The organization which publishes the Red List of species is:",
              options: ["ICFRE", "IUCN", "UNEP", "WWF"],
              correctAnswer: "IUCN"
            },
            {
              id: "neet_bio_46",
              text: "Identify the set of correct statements: A. The flowers of Vallisneria are colourful and produce nectar, B. The flowers of waterlily are not pollinated by water, C. In most of water-pollinated species, the pollen grains are protected from wetting, D. Pollen grains of some hydrophytes are long and ribbon like, E. In some hydrophytes, the pollen grains are carried passively inside water.",
              options: ["A, C, D and E only", "B, C, D and E only", "C, D and E only", "A, B, C and D only"],
              correctAnswer: "B, C, D and E only"
            },
            {
              id: "neet_bio_47",
              text: "The type of conservation in which the threatened species are taken out from their natural habitat and placed in special setting where they can be protected and given special care is called:",
              options: ["Semi-conservative method", "Sustainable development", "In-situ conservation", "Biodiversity conservation"],
              correctAnswer: "Biodiversity conservation (Note: Should be ex-situ conservation)"
            },
            {
              id: "neet_bio_48",
              text: "Inhibition of Succinic dehydrogenase enzyme by malonate is a classical example of:",
              options: ["Competitive inhibition", "Enzyme activation", "Cofactor inhibition", "Feedback inhibition"],
              correctAnswer: "Competitive inhibition"
            },
            {
              id: "neet_bio_49",
              text: "Identify the part of the seed from the given figure which is destined to form root when the seed germinates.",
              options: ["C", "D", "A", "B"],
              correctAnswer: "D"
            },
            {
              id: "neet_bio_50",
              text: "Bulliform cells are responsible for:",
              options: ["Increased photosynthesis in monocots", "Providing large spaces for storage of sugars", "Inward curling of leaves in monocots", "Protecting the plant from salt stress"],
              correctAnswer: "Inward curling of leaves in monocots"
            },
            {
              id: "neet_bio_51",
              text: "Which of the following are required for the dark reaction of photosynthesis? A. Light, B. Chlorophyll, C. CO2, D. ATP, E. NADPH",
              options: ["C, D and E only", "D and E only", "A, B and C only", "B, C and D only"],
              correctAnswer: "C, D and E only"
            },
            {
              id: "neet_bio_52",
              text: "Formation of interfascicular cambium from fully developed parenchyma cells is an example for:",
              options: ["Dedifferentiation", "Maturation", "Differentiation", "Redifferentiation"],
              correctAnswer: "Dedifferentiation"
            },
            {
              id: "neet_bio_53",
              text: "Hind II always cuts DNA molecules at a particular point called recognition sequence and it consists of:",
              options: ["4 bp", "10 bp", "8 bp", "6 bp"],
              correctAnswer: "6 bp"
            },
            {
              id: "neet_bio_54",
              text: "Tropical regions show greatest level of species richness because: A. Tropical latitudes have remained relatively undisturbed for millions of years, hence more time was available for species diversification, B. Tropical environments are more seasonal, C. More solar energy is available in tropics, D. Constant environments promote niche specialization, E. Tropical environments are constant and predictable.",
              options: ["A, B and E only", "A, B and D only", "A, C, D and E only", "A and B only"],
              correctAnswer: "A, C, D and E only"
            },
            {
              id: "neet_bio_55",
              text: "Which one of the following is not a criterion for classification of fungi?",
              options: ["Mode of spore formation", "Fruiting body", "Morphology of mycelium", "Mode of nutrition"],
              correctAnswer: "Mode of nutrition"
            },
            {
              id: "neet_bio_56",
              text: "How many molecules of ATP and NADPH are required for every molecule of CO2 fixed in the Calvin cycle?",
              options: ["3 molecules of ATP and 3 molecules of NADPH", "3 molecules of ATP and 2 molecules of NADPH", "2 molecules of ATP and 3 molecules of NADPH", "2 molecules of ATP and 2 molecules of NADPH"],
              correctAnswer: "3 molecules of ATP and 2 molecules of NADPH"
            },
            {
              id: "neet_bio_57",
              text: "These are regarded as major causes of biodiversity loss: A. Over exploitation, B. Co-extinction, C. Mutation, D. Habitat loss and fragmentation, E. Migration",
              options: ["A, B and E only", "A, B and D only", "A, C and D only", "A, B, C and D only"],
              correctAnswer: "A, B and D only"
            },
            {
              id: "neet_bio_58",
              text: "The capacity to generate a whole plant from any cell of the plant is called:",
              options: ["Differentiation", "Somatic hybridization", "Totipotency", "Micropropagation"],
              correctAnswer: "Totipotency"
            },
            {
              id: "neet_bio_59",
              text: "The equation of Verhulst-Pearl logistic growth is dN/dt = rN [(K - N)/K]. From this equation, K indicates:",
              options: ["Carrying capacity", "Population density", "Intrinsic rate of natural increase", "Biotic potential"],
              correctAnswer: "Carrying capacity"
            },
            {
              id: "neet_bio_60",
              text: "Spindle fibers attach to kinetochores of chromosomes during:",
              options: ["Anaphase", "Telophase", "Prophase", "Metaphase"],
              correctAnswer: "Metaphase"
            },
            {
              id: "neet_bio_61",
              text: "Identify the type of flowers based on the position of calyx, corolla and androecium with respect to the ovary from the given figures (a) and (b):",
              options: ["(a) Perigynous; (b) Epigynous", "(a) Perigynous; (b) Perigynous", "(a) Epigynous; (b) Hypogynous", "(a) Hypogynous; (b) Epigynous"],
              correctAnswer: "(a) Perigynous; (b) Epigynous"
            },
            {
              id: "neet_bio_62",
              text: "Match List I with List II: A. Rhizopus (I) Mushroom, B. Ustilago (II) Smut fungus, C. Puccinia (III) Bread mould, D. Agaricus (IV) Rust fungus",
              options: ["A-III, B-II, C-I, D-IV", "A-IV, B-III, C-II, D-I", "A-III, B-II, C-IV, D-I", "A-I, B-III, C-II, D-IV"],
              correctAnswer: "A-III, B-II, C-IV, D-I"
            },
            {
              id: "neet_bio_63",
              text: "In a plant, black seed color (BB/Bb) is dominant over white seed color (bb). In order to find out the genotype of the black seed plant, with which of the following genotype will you cross it?",
              options: ["Bb", "BB/Bb", "BB", "bb"],
              correctAnswer: "bb"
            },
            {
              id: "neet_bio_64",
              text: "A pink flowered Snapdragon plant was crossed with a red flowered Snapdragon plant. What type of phenotype/s is/are expected in the progeny?",
              options: ["Only pink flowered plants", "Red, Pink as well as white flowered plants", "Only red flowered plants", "Red flowered as well as pink flowered plants"],
              correctAnswer: "Red flowered as well as pink flowered plants"
            },
            {
              id: "neet_bio_65",
              text: "Match List I with List II: A. Two or more alternative forms of a gene (I) Back cross, B. Cross of F1 progeny with homozygous recessive parent (II) Ploidy, C. Cross of F1 progeny with any of the parents (III) Allele, D. Number of chromosome sets in plant (IV) Test cross",
              options: ["A-III, B-IV, C-I, D-II", "A-IV, B-III, C-II, D-I", "A-I, B-II, C-III, D-IV", "A-II, B-I, C-III, D-IV"],
              correctAnswer: "A-III, B-IV, C-I, D-II"
            },
            {
              id: "neet_bio_66",
              text: "Lecithin, a small molecular weight organic compound found in living tissues, is an example of:",
              options: ["Glycerides", "Carbohydrates", "Amino acids", "Phospholipids"],
              correctAnswer: "Phospholipids"
            },
            {
              id: "neet_bio_67",
              text: "Match List I with List II: A. Clostridium butylicum (I) Ethanol, B. Saccharomyces cerevisiae (II) Streptokinase, C. Trichoderma polysporum (III) Butyric acid, D. Streptococcus sp. (IV) Cyclosporin-A",
              options: ["A-III, B-I, C-IV, D-II", "A-IV, B-I, C-III, D-II", "A-III, B-I, C-II, D-IV", "A-II, B-IV, C-III, D-I"],
              correctAnswer: "A-III, B-I, C-IV, D-II"
            },
            {
              id: "neet_bio_68",
              text: "In the given figure, which component has thin outer walls and highly thickened inner walls:",
              options: ["A", "B", "C", "D"],
              correctAnswer: "C"
            },
            {
              id: "neet_bio_69",
              text: "Which of the following is an example of actinomorphic flower?",
              options: ["Pisum", "Sesbania", "Datura", "Cassia"],
              correctAnswer: "Datura"
            },
            {
              id: "neet_bio_70",
              text: "A transcription unit in DNA is defined primarily by the three regions in DNA and these are with respect to upstream and downstream end:",
              options: ["Inducer, Repressor, Structural gene", "Promoter, Structural gene, Terminator", "Repressor, Operator gene, Structural gene", "Structural gene, Transposons, Operator gene"],
              correctAnswer: "Promoter, Structural gene, Terminator"
            },
            {
              id: "neet_bio_71",
              text: "What is the fate of a piece of DNA carrying only gene of interest which is transferred into an alien organism? A. The piece of DNA would be able to multiply itself independently in the progeny cells of the organisms, B. It may get integrated into the genome of the recipient, C. It may multiply and be inherited along with the host DNA, D. The alien piece of DNA is not an integrated part of chromosome, E. It shows ability to replicate.",
              options: ["B and C only", "A and E only", "A and B only", "D and E only"],
              correctAnswer: "B and C only"
            },
            {
              id: "neet_bio_72",
              text: "Auxin is used by gardeners to prepare weed-free lawns. But no damage is caused to grass as auxin:",
              options: ["Does not affect mature monocotyledonous plants", "Can help in cell division in grasses, to produce growth", "Promotes apical dominance", "Promotes abscission of mature leaves only"],
              correctAnswer: "Does not affect mature monocotyledonous plants"
            },
            {
              id: "neet_bio_73",
              text: "The cofactor of the enzyme carboxypeptidase is:",
              options: ["Flavin", "Haem", "Zinc", "Niacin"],
              correctAnswer: "Zinc"
            },
            {
              id: "neet_bio_74",
              text: "The lactose present in the growth medium of bacteria is transported to the cell by the action of:",
              options: ["Permease", "Polymerase", "Beta-galactosidase", "Acetylase"],
              correctAnswer: "Permease"
            },
            {
              id: "neet_bio_75",
              text: "Which one of the following can be explained on the basis of Mendel's Law of Dominance? A. Out of one pair of factors one is dominant and the other is recessive, B. Alleles do not show any expression and both the characters appear as such in F2 generation, C. Factors occur in pair in normal diploid plants, D. The discrete unit controlling a particular character is called factor, E. The expression of only one of the parental characters is found in a monohybrid cross.",
              options: ["B, C and D only", "A, B, C, D and E", "A, B and C only", "A, C, D and E only"],
              correctAnswer: "A, C, D and E only"
            },
            {
              id: "neet_bio_76",
              text: "Given below are two statements: Statement I: Bt toxins are insect group specific and coded by a gene cry IAc. Statement II: Bt toxin exists as inactive protoxin in B. thuringiensis. However, after ingestion by the insect the inactive protoxin gets converted into active form due to acidic pH of the insect gut.",
              options: ["Statement I is true but Statement II is false", "Statement I is false but Statement II is true", "Both Statement I and Statement II are true", "Both Statement I and Statement II are false"],
              correctAnswer: "Both Statement I and Statement II are true"
            },
            {
              id: "neet_bio_77",
              text: "Given below are two statements: Statement I: Parenchyma is living but collenchyma is dead tissue. Statement II: Gymnosperms lack xylem vessels but presence of xylem vessels is the characteristic of angiosperms.",
              options: ["Statement I is true but Statement II is false", "Statement I is false but Statement II is true", "Both Statement I and Statement II are true", "Both Statement I and Statement II are false"],
              correctAnswer: "Statement I is false but Statement II is true"
            },
            {
              id: "neet_bio_78",
              text: "Given below are two statements: Statement I: Chromosomes become gradually visible under light microscope during leptotene stage. Statement II: The beginning of diplotene stage is recognized by dissolution of synaptonemal complex.",
              options: ["Statement I is true but Statement II is false", "Statement I is false but Statement II is true", "Both Statement I and Statement II are true", "Both Statement I and Statement II are false"],
              correctAnswer: "Both Statement I and Statement II are true"
            },
            {
              id: "neet_bio_79",
              text: "Match List I with List II: A. Nucleolus (I) Site of formation of glycolipid, B. Centriole (II) Organization like the cartwheel, C. Leucoplasts (III) Site for active ribosomal RNA synthesis, D. Golgi apparatus (IV) For storing nutrients",
              options: ["A-III, B-IV, C-II, D-I", "A-I, B-II, C-III, D-IV", "A-III, B-II, C-IV, D-I", "A-II, B-III, C-I, D-IV"],
              correctAnswer: "A-III, B-II, C-IV, D-I"
            },
            {
              id: "neet_bio_80",
              text: "List of endangered species was released by:",
              options: ["Foam", "IUCN", "GEAC", "WWF"],
              correctAnswer: "IUCN"
            },
            {
              id: "neet_bio_81",
              text: "The DNA present in chloroplast is:",
              options: ["Linear, single stranded", "Circular, single stranded", "Linear, double stranded", "Circular, double stranded"],
              correctAnswer: "Circular, double stranded"
            },
            {
              id: "neet_bio_82",
              text: "Which of the following are fused in somatic hybridization involving two varieties of plants?",
              options: ["Protoplasts", "Pollens", "Callus", "Somatic embryos"],
              correctAnswer: "Protoplasts"
            },
            {
              id: "neet_bio_83",
              text: "Identify the correct description about the given figure:",
              options: ["Cleistogamous flowers showing autogamy", "Compact inflorescence showing complete autogamy", "Wind pollinated plant inflorescence showing flowers with well exposed stamens", "Water pollinated flowers showing stamens with mucilaginous covering"],
              correctAnswer: "Wind pollinated plant inflorescence showing flowers with well exposed stamens"
            },
            {
              id: "neet_bio_84",
              text: "Spraying sugarcane crop with which of the following plant growth regulators increases the length of stem, thus increasing the yield?",
              options: ["Cytokinin", "Abscisic acid", "Auxin", "Gibberellin"],
              correctAnswer: "Gibberellin"
            },
            {
              id: "neet_bio_85",
              text: "Match List I with List II: A. Frederick Griffith (I) Genetic code, B. Francois Jacob & Jacques Monod (II) Semi-conservative mode of DNA replication, C. Har Gobind Khorana (III) Transformation, D. Meselson & Stahl (IV) Lac operon",
              options: ["A-II, B-III, C-IV, D-I", "A-IV, B-I, C-II, D-III", "A-III, B-II, C-I, D-IV", "A-III, B-IV, C-I, D-II"],
              correctAnswer: "A-III, B-IV, C-I, D-II"
            },
            {
              id: "neet_bio_86",
              text: "Match List I with List II: A. GLUT-4 (I) Hormone, B. Insulin (II) Enzyme, C. Trypsin (III) Intercellular ground substances, D. Collagen (IV) Enables glucose transport into cell",
              options: ["A-II, B-III, C-IV, D-I", "A-III, B-IV, C-I, D-II", "A-IV, B-I, C-II, D-III", "A-I, B-II, C-III, D-IV"],
              correctAnswer: "A-IV, B-I, C-II, D-III"
            },
            {
              id: "neet_bio_87",
              text: "Given below are two statements: Statement I: In C3 Plants, some O2 binds to RuBisCO, hence CO2 fixation is decreased. Statement II: In C4 plants, mesophyll cells show very little photorespiration while bundle sheath cells do not show photorespiration.",
              options: ["Statement I is true but Statement II is false", "Statement I is false but Statement II is true", "Both Statement I and Statement II are true", "Both Statement I and Statement II are false"],
              correctAnswer: "Both Statement I and Statement II are true"
            },
            {
              id: "neet_bio_88",
              text: "Identify the step in tricarboxylic acid cycle, which does not involve oxidation of substrate.",
              options: ["Succinyl-CoA → Succinic acid", "Isocitrate → α-ketoglutaric acid", "Malic acid → Oxaloacetic acid", "Succinic acid → Malic acid"],
              correctAnswer: "Succinyl-CoA → Succinic acid"
            },
            {
              id: "neet_bio_89",
              text: "Match List I with List II: A. Citric acid cycle (I) Cytoplasm, B. Glycolysis (II) Mitochondrial matrix, C. Electron transport system (III) Intermembrane space of mitochondria, D. Proton gradient (IV) Inner mitochondrial membrane",
              options: ["A-III, B-IV, C-I, D-II", "A-IV, B-III, C-II, D-I", "A-I, B-II, C-III, D-IV", "A-II, B-I, C-IV, D-III"],
              correctAnswer: "A-II, B-I, C-IV, D-III"
            },
            {
              id: "neet_bio_90",
              text: "Which of the following statement is correct regarding the process of replication in E.coli?",
              options: ["The DNA dependent DNA polymerase catalyses polymerization in 5’→3’ as well as 3’→5’ direction", "The DNA dependent DNA polymerase catalyses polymerization in 5’→3’ direction", "The DNA dependent DNA polymerase catalyses polymerization in one direction, that is 3’→5’", "The DNA dependent RNA polymerase catalyses polymerization in one direction, that is 5’→3’"],
              correctAnswer: "The DNA dependent DNA polymerase catalyses polymerization in 5’→3’ direction"
            },
            {
              id: "neet_bio_91",
              text: "In an ecosystem if the Net Primary Productivity (NPP) of first trophic level is: 100x kcal m^-2 yr^-1, what would be the GPP (Gross Primary Productivity) of the third trophic level of the same ecosystem?",
              options: ["10x kcal m^-2 yr^-1", "(100x / 3x) kcal m^-2 yr^-1", "(x / 10) kcal m^-2 yr^-1", "x kcal m^-2 yr^-1"],
              correctAnswer: "x kcal m^-2 yr^-1 (Note: Likely a misinterpretation)"
            },
            {
              id: "neet_bio_92",
              text: "Match List I with List II: A. Rose (I) Twisted aestivation, B. Pea (II) Perigynous flower, C. Cotton (III) Drupe, D. Mango (IV) Marginal placentation",
              options: ["A-IV, B-III, C-II, D-I", "A-II, B-III, C-IV, D-I", "A-II, B-IV, C-I, D-III", "A-I, B-II, C-III, D-IV"],
              correctAnswer: "A-I, B-IV, C-II, D-III"
            },
            {
              id: "neet_bio_93",
              text: "Match List I with List II: A. Robert May (I) Species area relationship, B. Alexander von Humboldt (II) Long term ecosystem experiment using outdoor plots, C. Paul Ehrlich (III) Global species diversity at about 7 million, D. David Tilman (IV) Rivet popper hypothesis",
              options: ["A-I, B-III, C-II, D-IV", "A-III, B-IV, C-II, D-I", "A-II, B-III, C-I, D-IV", "A-III, B-I, C-IV, D-II"],
              correctAnswer: "A-III, B-I, C-IV, D-II"
            },
            {
              id: "neet_bio_94",
              text: "Match List I with List II: A. Monoadelphous (I) Citrus, B. Diadelphous (II) Pea, C. Polyadelphous (III) Lily, D. Epiphyllous (IV) China-rose",
              options: ["A-I, B-II, C-IV, D-III", "A-III, B-I, C-IV, D-II", "A-IV, B-II, C-I, D-III", "A-IV, B-I, C-II, D-III"],
              correctAnswer: "A-I, B-II, C-IV, D-III"
            }
          ]
        }
      ]
    }
  ]
};

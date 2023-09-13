# 24040_Capstone
Model Based Electrical Diagram and TID Generation


Model Based Electrical Diagram and TID Generation
Summary
Northrop Grumman Corporation (NGC) is looking to build a software tool using model based
interconnected elements that can then be exported to multiple formats.
When initially designing a vehicle Electrical Ground Support Equipment (EGSE) rack, our Electrical
Engineers (EEs) typically must create drawings, then map those drawings to tables within a Technical
Interface Document (TID), and then software engineers must take the TID and replicate the
interconnections within a configuration file. With all these hand-offs, we typically run into
inconsistencies between each step that are not found until later in vehicle development, which is
undesirable.
The idea of this project is to create model-based interconnect tool that defines inputs, outputs, and
other special properties of a component. The tool can then export the interconnected model into a
minimum of these two views:
• Electrical drawing diagram showing the interconnected components with proper labeling.
• TID table generation
If time allows, then a bonus would be able to generate components of the config file.
Each model would be of a single component found within a EGSE rack such as a power supply, PC, and
discrete I/Os.
This tool will allow a single source of truth which defines each of the outputs needed for a launch vehicle
for the EGSE and its configuration between components.
Goals
• Incorporate human factors such as human interaction, ergonomics, and usability when
generating design of UI/UX.
• Tool should allow easy configuration/addition of component models.
• Should use Electrical Engineering principles for drawings.
• Full software development lifecycle should be utilized to develop requirements,
design/prototype the code, develop the tool, and test.
• Software should utilize open-source and/or U.S. based 3rd party libraries.
• Tool can generate at a minimum two different views.
Inputs (Resources provided by NG)
• 2 mentors, one Electrical Engineer and one Software Engineer.
o Note there are no restrictions on programming language used to develop the tool,
however the NG mentor will most likely be strongest in Python, Java, and/or C++.
• Demonstration of existing EE drawings/TIDs that are manually developed today.
Deliverables
General list of possible deliverables is below, but final list will be finalized and agreed to with the team.
• Periodic demos with NGC
• Prototype of tool using wireframing or other method.
• Final tool that can be used to generate electrical drawings and TID information directly from
models.

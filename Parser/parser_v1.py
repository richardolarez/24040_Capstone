import xml.etree.ElementTree as ET

# Parse the XML file
tree = ET.parse('UofA - SW_EE/BasicVisioDrawing_files/data.xml')
root = tree.getroot()

# Create a list to hold the objects
objects = []

# Loop through the shapes
for shape in root.findall('.//Shape'):
    # Get the ID, UniqueID, Name, and Text attributes
    print(shape)
    shape_id = shape.get('ID')
    unique_id = shape.get('UniqueID')
    name = shape.get('Name')
    text = shape.find('Text').text
    
    # Get the PinX and PinY attributes from the XForm element
    xform = shape.find('XForm')
    pinx = xform.find('PinX').text
    piny = xform.find('PinY').text
    
    # Create an object with the information
    obj = {
        'shape_id': shape_id,
        'unique_id': unique_id,
        'name': name,
        'text': text,
        'pinx': pinx,
        'piny': piny
    }
    
    # Add the object to the list
    objects.append(obj)



# Print the list of objects
print(objects)
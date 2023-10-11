import xml.etree.ElementTree as ET

# Load the XML file
tree = ET.parse('data.xml')
root = tree.getroot()

# Iterate through the shapes
for shape in root.findall(".//Shape"):
    shape_id = shape.get("ID")
    unique_id = shape.get("UniqueID")
    name = shape.get("Name")
    name_u = shape.get("NameU")

    # Extract text within the Text element if it exists
    text_element = shape.find(".//Text")
    if text_element is not None:
        text = text_element.text
    else:
        text = None

    # Extract X and Y coordinates from the XForm element
    x_form = shape.find(".//XForm")
    if x_form is not None:
        pin_x = x_form.find(".//PinX").text
        pin_y = x_form.find(".//PinY").text
        pin_x_unit = x_form.find(".//PinX").get("Unit")
        pin_y_unit = x_form.find(".//PinY").get("Unit")
    else:
        pin_x = None
        pin_y = None
        pin_x_unit = None
        pin_y_unit = None

    # Print or process the extracted information as needed
    print(f"Shape ID: {shape_id}")
    print(f"Unique ID: {unique_id}")
    print(f"Name: {name}")
    print(f"NameU: {name_u}")
    if text is not None:
        print(f"Text: {text}")
    if pin_x is not None and pin_y is not None:
        print(f"PinX: {pin_x} {pin_x_unit}")
        print(f"PinY: {pin_y} {pin_y_unit}")
    print("\n")

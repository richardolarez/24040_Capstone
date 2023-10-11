using System;
using Microsoft.Office.Interop.Visio;

namespace VisioFileExtractor
{
    class Program
    {
        static void Main(string[] args)
        {
            // Specify the path to your .vsdx file
            string visioFilePath = @"C:\Path\To\BasicVisioFile.vsdx";

            // Create a new instance of the Visio application
            Application visioApp = new Application();

            // Open the .vsdx file
            Document visioDocument = visioApp.Documents.Open(visioFilePath);

            // Access the pages within the Visio document
            foreach (Page page in visioDocument.Pages)
            {
                Console.WriteLine("Page: " + page.Name);

                // Access the shapes on the page
                foreach (Shape shape in page.Shapes)
                {
                    Console.WriteLine("Shape: " + shape.Name);
                    Console.WriteLine("Shape Type: " + shape.Type);
                    Console.WriteLine("Shape Text: " + shape.Text);
                    Console.WriteLine("Shape X Position: " + shape.CellsU["PinX"].ResultIU);
                    Console.WriteLine("Shape Y Position: " + shape.CellsU["PinY"].ResultIU);
                }
            }

            // Close the Visio document and the Visio application
            visioDocument.Close();
            visioApp.Quit();

            Console.WriteLine("Extraction complete.");
        }
    }
}

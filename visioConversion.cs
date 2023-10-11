// Main
// Open the Visio file in a Package object.
using (Package visioPackage = OpenPackage("BasicVisioDrawing.vsdx", 
    Environment.SpecialFolder.Desktop))
{
}

private static Package OpenPackage(string fileName, 
    Environment.SpecialFolder folder)
{
    Package visioPackage = null;
    // Get a reference to the location 
    // where the Visio file is stored.
    string directoryPath = System.Environment.GetFolderPath(
        folder);
    DirectoryInfo dirInfo = new DirectoryInfo(directoryPath);
    // Get the Visio file from the location.
    FileInfo[] fileInfos = dirInfo.GetFiles(fileName);
    if (fileInfos.Count() > 0)
    {
        FileInfo fileInfo = fileInfos[0];
        string filePathName = fileInfo.FullName;
        // Open the Visio file as a package with
        // read/write file access.
        visioPackage = Package.Open(
            filePathName,
            FileMode.Open,
            FileAccess.ReadWrite);
        }
        // Return the Visio file as a package.
        return visioPackage;
}
# -*- coding: utf-8 -*-
"""
Created on Thu Nov  9 17:21:24 2023

@author: julia
"""

import powerSupplyObject as PSO  
pattern = r'\{([^}]*)\}'
file_path = "visioObjects.txt"
powerDict = {}


def parsePowerSupply(filePath):
    powerSupply = []
    with open(filePath, "r") as file: 
        for line in file: 
            if "PS" in line: 
                psID = line[6:]
                psID = psID.replace("\n", "")
                newPowerObject = PSO.PowerSupply(psID)
                powerSupply.append(newPowerObject)
                powerDict[psID] = newPowerObject
    return powerDict; 

powerSupply = parsePowerSupply(file_path) 


print (powerDict)

print(" ")
print(powerDict["VIC PS 1"])

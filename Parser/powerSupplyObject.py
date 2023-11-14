# -*- coding: utf-8 -*-
"""
Created on Thu Nov  9 17:47:14 2023

@author: julia
"""

class PowerSupply:
    def __init__(self, ID): 
        self.ID = ID; 
        self.battery = None; 
        self.voltageSetting = None; 
        self.OVP = None;
        self.currentLimit = None 
        self.limitsVoltage = None; 
        self.limitsCurrent = None; 
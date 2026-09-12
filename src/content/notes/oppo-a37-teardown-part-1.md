---
title: "Oppo A37 Teardown (Part 1): Reviving My Father's Dead Phone"
description: "Hardware teardown of an unbootable Oppo A37. Investigating power delivery failure after prolonged inactivity."
date: 2026-09-11
tags: ["hardware", "teardown", "oppo-a37", "experiment"]
---

## Background

Device: Oppo A37.
Condition: Completely unresponsive, no boot sequence, and no charge indication. 

The device has been inactive for an extended period. The primary hypothesis is a deep-discharged battery cell or a fault in the power delivery IC. Proceeding with a full hardware teardown to isolate the failure point.

## Hardware Disassembly

Stripped the device down to its core modules for physical inspection.

**Observation during teardown:**
The motherboard exhibits clear signs of prior servicing. Non-factory adhesive residue was identified near several shielding cans and connectors, indicating a previous aftermarket repair.

*(Component separation process)*
![Component Separation](/images/notes/oppo-a37-phone-reparation/phone-remove-part.webp)

**Current isolation state:**
1. Motherboard PCB
2. Display Assembly (LCD)
3. Main Frame

## Power Diagnostics

To validate the power delivery hypothesis, I probed the battery terminals using a digital multimeter. 

**Result:** 0.00V output. 
The Li-ion cell is completely depleted and incapable of holding a surface charge.

*(Probing the battery voltage)*
![Battery Voltage Check](/images/notes/oppo-a37-phone-reparation/bateri-check-volt.webp)

## Next Steps

The battery is confirmed dead. A replacement cell has been ordered. Upon installation, I will run a secondary boot test to verify if the motherboard and bootloader are still functional, or if the prior servicing left deeper board-level damage.

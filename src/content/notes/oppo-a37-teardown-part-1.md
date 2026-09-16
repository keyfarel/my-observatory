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

Stripped the device down to its core modules for physical inspection. During this process, the outer physical power and volume buttons fell out and were lost. Only the internal switches remain on the board.

**Observation during teardown:**
The motherboard exhibits clear signs of prior servicing. Non-factory adhesive residue was identified near several shielding cans and connectors, indicating a previous aftermarket repair.

![Component Separation](/images/notes/oppo-a37-phone-reparation/phone-remove-part.webp)
<p class="text-center text-sm opacity-80"><em>(Component separation process)</em></p>

**Current isolation state:**
1. Motherboard PCB
2. Display Assembly (LCD)
3. Main Frame

## Power Diagnostics

To validate the power delivery hypothesis, I probed the battery terminals using a digital multimeter. 

**Result:** 0.00V output. 
The Li-ion cell is completely depleted and incapable of holding a surface charge.

![Battery Voltage Check](/images/notes/oppo-a37-phone-reparation/battery-check-volt.webp)
<p class="text-center text-sm opacity-80"><em>(Probing the battery voltage)</em></p>

## Battery Replacement

The new battery finally arrived. Before installing it, I probed the new cell with the multimeter to verify its initial charge state. 

**Result:** 4.06V. The battery has a healthy charge.

![New Battery Measurement](/images/notes/oppo-a37-phone-reparation/new-battery-measurement.webp)
<p class="text-center text-sm opacity-80"><em>(Measuring the new battery)</em></p>

I connected the new battery to the motherboard and ran a quick power delivery test using a USB doctor to monitor the charging current.

![USB Doctor Test](/images/notes/oppo-a37-phone-reparation/battery-test-with-usb-doctor.webp)
<p class="text-center text-sm opacity-80"><em>(Checking power draw with USB doctor)</em></p>

The USB doctor showed 5.26V and a steady 0.49A draw. For an older device like this, the 0.49A pull confirms the motherboard's charging IC is healthy and actively drawing power.

Booting the phone required a small workaround. The internal power switch on the board was completely unresponsive. To bypass this, I forced a boot by plugging in the charger while holding down the internal volume down switch. The LCD lit up successfully and the OS loaded without issues.

## Reassembly and Final Test

I placed the motherboard and the new battery into the main frame, securing all connectors. Finally, I attached the back casing. 

![Reassembly](/images/notes/oppo-a37-phone-reparation/motherboard-casing-assembly.webp)
<p class="text-center text-sm opacity-80"><em>(Reassembling the motherboard and casing)</em></p>

The phone powered on perfectly and booted into the OS. The repair was a success. The prior servicing didn't cause any permanent board damage after all.

![Phone Turned On](/images/notes/oppo-a37-phone-reparation/phone-turned-on.webp)
<p class="text-center text-sm opacity-80"><em>(Boot successful)</em></p>

## Conclusion and Part 2

Getting the phone to boot was only the first step. While the main board works, the physical condition is still poor due to previous repair attempts. 

In Part 2, I will focus on a full cosmetic and functional restoration. The plan includes:
1. **Replacing the frame and back door**: The current housing is covered in messy glue residue left behind by the previous repairman.
2. **Replacing the LCD assembly**: The screen has visible glue damage and the bottom 20 percent of the display is completely unresponsive to touch.
3. **Installing new physical buttons**: The original power and volume buttons were lost during the initial teardown process.

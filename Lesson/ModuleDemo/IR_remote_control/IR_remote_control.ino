#include "IRremote.h"

#define INPUT1_PIN 6   // PWMB
#define INPUT2_PIN 10  // DIRB  ---  right
#define INPUT4_PIN 9   // PWMA
#define INPUT3_PIN 5   // DIRA  ---  left

int RECV_PIN = 12;//Define the infrared receiver pin to 12

long expedite1 = 0x16;
long expedite2 = 0x0D;
long advence = 0x18;
long back = 0x52;
long stop = 0x1C;
long left = 0x08;
long right = 0x5A;
static int val = 160;
IRremote irrecv(RECV_PIN);


void setup() {
  Serial.begin(9600);
  irrecv.begin();
}

void loop() {
  byte irKeyCode;
  if (irKeyCode = irrecv.getCode())
  {
    Serial.println(irKeyCode,HEX);
    if (irKeyCode == advence) {
      analogWrite(INPUT1_PIN, val);//the speed value of motorA is val
      analogWrite(INPUT2_PIN, 0);
      analogWrite(INPUT3_PIN, 0);
      analogWrite(INPUT4_PIN, val); //the speed value of motorA is val
    }
    else if (irKeyCode == expedite1) {
      val += 20;
      if (val >= 240)
      {
        val = 255;
      }
    }
    else if (irKeyCode == expedite2) {
      val -= 20;
      if (val <= 20)
      {
        val = 0;
      }
    }
    else if (irKeyCode == stop) {
      analogWrite(INPUT1_PIN, 0);
      analogWrite(INPUT2_PIN, 0);
      analogWrite(INPUT3_PIN, 0);
      analogWrite(INPUT4_PIN, 0);
    }
    else if (irKeyCode == left) {
      analogWrite(INPUT1_PIN, 0);
      analogWrite(INPUT2_PIN, val); //the speed value of motorA is val
      analogWrite(INPUT3_PIN, 0);
      analogWrite(INPUT4_PIN, val); //the speed value of motorA is val
    }
    else if (irKeyCode == right) {
      analogWrite(INPUT1_PIN, val);//the speed value of motorA is val
      analogWrite(INPUT2_PIN, 0);
      analogWrite(INPUT3_PIN, val);//the speed value of motorA is val
      analogWrite(INPUT4_PIN, 0);
    }
    else if (irKeyCode == back) {
      analogWrite(INPUT1_PIN, 0);
      analogWrite(INPUT2_PIN, val); //the speed value of motorA is val
      analogWrite(INPUT3_PIN, val); //the speed value of motorA is val
      analogWrite(INPUT4_PIN, 0);
    }
  } else {
    analogWrite(INPUT1_PIN, 0);
    analogWrite(INPUT2_PIN, 0); //the speed value of motorA is 0
    analogWrite(INPUT3_PIN, 0);
    analogWrite(INPUT4_PIN, 0); //the speed value of motorB is 0
  }
}

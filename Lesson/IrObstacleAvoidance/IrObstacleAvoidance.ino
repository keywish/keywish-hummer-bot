/***********************************************************************
 *       __                                                          _
 *      / /        _____  __    __  _          _   (_)   ________   | |
 *     / /____   / _____) \ \  / / | |   __   | |  | |  (  ______)  | |_____
 *    / / ___/  | |_____   \ \/ /  | |  /  \  | |  | |  | |______   |  ___  |
 *   / /\ \     | |_____|   \  /   | | / /\ \ | |  | |  (_______ )  | |   | |
 *  / /  \ \__  | |_____    / /    | |/ /  \ \| |  | |   ______| |  | |   | |
 * /_/    \___\  \______)  /_/      \__/    \__/   |_|  (________)  |_|   |_|
 *
 *
 * KeyWay Tech firmware
 *
 * Copyright (C) 2015-2020
 *
 * This program is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the
 * Free Software Foundation, in version 3.
 * learn more you can see <http://www.gnu.org/licenses/>.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.
 *
 */

int E1 = 5; //PWMA
int M1 = 9; //DIRA****************************************left
int E2 = 6; //PWMB
int M2 = 10; //DIRB****************************************right
const int leftPin = A3;
const int rightPin = A4;
float dl;
float dr;
void setup()
{
 Serial.begin(9600);
 pinMode(leftPin, INPUT);
 pinMode(rightPin, INPUT);
 delay(1000);
}

void loop()
{
  dl = analogRead(leftPin);
  dr = analogRead(rightPin);

  if (dl >= 38 && dr <= 38)
  {
   analogWrite(M1,0);
   analogWrite(E1, 180); //the speed value of motorA is 180
   analogWrite(M2,180);
   analogWrite(E2, 0); //the speed value of motorB is 180
   Serial.print(dl);
   Serial.print("   ");
   Serial.print(dr);
   Serial.print("   ");
   Serial.println("Turning left");
   delay(300);
   analogWrite(M1,0);
   analogWrite(E1, 0);
   analogWrite(M2,0);
   analogWrite(E2, 0);
   delay(1000); //********************************************//Turning left
   }

   if (dl <= 38 && dr <= 38)
   {
    analogWrite(M1,255);
    analogWrite(E1, 0); //the speed value of motorA is 255
    analogWrite(M2,0);
    analogWrite(E2, 255); //the speed value of motorB is 255
    Serial.print(dl);
    Serial.print("   ");
    Serial.print(dr);
    Serial.print("   ");
    Serial.println("Turning around");
    delay(500);
    analogWrite(M1,0);
    analogWrite(E1, 0);
    analogWrite(M2,0);
    analogWrite(E2, 0);
    delay(1000); //********************************************//Turning around
   }

   if (dl <= 38 && dr >= 38)
  {
   analogWrite(M1,180);
   analogWrite(E1, 0); //the speed value of motorA is val
   analogWrite(M2,0);
   analogWrite(E2, 180); //the speed value of motorA is val
   Serial.print(dl);
   Serial.print("   ");
   Serial.print(dr);
   Serial.print("   ");
   Serial.println("Turning right");
   delay(300);
   analogWrite(M1,0);
   analogWrite(E1, 0);
   analogWrite(M2,0);
   analogWrite(E2, 0);
   delay(1000); //********************************************//Turning right
  }

   if (dl >= 38 && dr >= 38)
  {
   int val=100;
   analogWrite(M1,0);
   analogWrite(E1, val); //the speed value of motorA is val
   analogWrite(M2,0);
   analogWrite(E2, val); //the speed value of motorB is val
   Serial.print(dl);
   Serial.print("   ");
   Serial.print(dr);
   Serial.print("   ");
   Serial.println("go");//********************************************//forward
  }
}

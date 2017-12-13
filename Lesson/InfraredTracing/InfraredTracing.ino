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

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  int left1,centre,right1;
  left1=analogRead(A0);
  centre=analogRead(A1);
  right1=analogRead(A2);

  if((right1 >= 975)&&(centre <= 8)&&(left1 >= 975))//*******forward*******//
  {
   int val=150;
   analogWrite(M1,0);
   analogWrite(E1, val); //the speed value of motorA is val
   analogWrite(M2,0);
   analogWrite(E2, val); //the speed value of motorB is val
  }

  else  if((right1 <= 8)&&(centre >= 975)&&(left1 >= 975))//***turn right***//
  {
    int val=150;
    analogWrite(E1,0);
    analogWrite(M1, val); //the speed value of motorA is val
    analogWrite(M2,0);
    analogWrite(E2, val); //the speed value of motorB is val
  }

   else  if((right1 >= 975)&&(centre >= 975)&&(left1 <= 8))//***Turn left***//
   {
     int val=130;
     analogWrite(M1,0);
     analogWrite(E1, val); //the speed value of motorA is val
     analogWrite(E2,0);
     analogWrite(M2, val); //the speed value of motorB is val
    }

   if((right1 <= 8)&&(centre <= 8)&&(left1 <= 8))//*******forward*******//
  {
   int val=130;
   analogWrite(M1,0);
   analogWrite(E1, val); //the speed value of motorA is val
   analogWrite(M2,0);
   analogWrite(E2, val); //the speed value of motorB is val
  }
}

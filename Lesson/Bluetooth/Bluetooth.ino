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

#include "protocol.h"
#include "hummerbot.h"
#include "process.h"
int E1 = 5;  //PWMA
int M1 = 9;  //DIRA  ---  left
int E2 = 6;  //PWMB
int M2 = 10; //DIRB  ---  right

byte readbuff[32] = {};
int readlen = 0;
ST_protocol recv;
hummerbot hbot(E1,M1,E2,M2,13,A0);

void setup()
{
    Serial.begin(9600);
    hbot.init();
}
 void read_data(void)
{
  unsigned char avilable;
  byte *p = readbuff ;
  memset(p,0,32);
  readlen = 0;
  while (Serial.available()>0)
    {
        if(!avilable && Serial.peek()==START_CODE) 
        {
            avilable = 1;
        }
        if (avilable) 
        {
            if ((*p = Serial.read()) == END_CODE)
            {
               avilable =0;
               readlen++;
              //Serial.print(*p,HEX);
                break;
            }
         //  Serial.print(*p,HEX);
            p++;
            readlen++;
        }
      
    }
// Serial.print("\n");
}


 void loop()
{         
     read_data();
     if (!protocol_prase(readbuff,readlen,&recv)) 
{
    	switch(recv.function)
    	{   
    		case E_BATTERY:
    			break ;
    		case E_LED:
    			break;
    		case E_INFO:
                        break;
                case E_ROBOT_CONTROL:
                  hbot.drive(protocol_prase_degree(&recv));
                //  Serial.println(protocol_prase_degree(&recv));
                        break;
                case E_ROBOT_CONTROL_SPEED:
                 hbot.setSpeed(protocol_prase_speed(&recv));
                //  Serial.print("n");
                        break ;
    		case E_VERSION:
    			break;	
    	}
    }
}


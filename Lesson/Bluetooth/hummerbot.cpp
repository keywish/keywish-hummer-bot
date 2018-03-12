#include "hummerbot.h"

hummerbot::hummerbot(unsigned int m1,unsigned int m2,unsigned int m3,unsigned int m4,unsigned int led,unsigned int battery)
{
	this->left_negative_pin=m1;
	this->left_positive_pin=m2;
	this->right_negative_pin=m3;
	this->right_positive_pin=m4;
	this->led_pin=led;
	this->battery_adc=battery;
}

void hummerbot::init(void)
{
	bot_type = "hummer-bot";
	addr = 0x01;
	hbot_speed = 0 ;
	pinMode(left_positive_pin, OUTPUT);
	digitalWrite(left_negative_pin, LOW); // When not sending PWM, we want it low
	pinMode(right_positive_pin, OUTPUT);
	digitalWrite(right_positive_pin, LOW); // When not sending PWM, we want it low
	pinMode(left_negative_pin, OUTPUT);
	digitalWrite(left_negative_pin, LOW); // When not sending PWM, we want it low
	pinMode(right_negative_pin, OUTPUT);
	digitalWrite(right_negative_pin, LOW); // When not sending PWM, we want it low
	pinMode(led_pin, OUTPUT);
	digitalWrite(led_pin, LOW);
	pinMode(battery_adc, INPUT);
}

void hummerbot::setSpeed(int s)
{
	hbot_speed = s;
}

int hummerbot::getBattery(void)
{

}

/*
int hummerbot::SendInfo(void)
{
	//

}
*/
void hummerbot::goBack(void)
{
    //Serial.println("goBack");
    int value = (hbot_speed/10)*25;	 //app contol hbot_speed is 0 ~ 100 ,pwm is 0~255
    analogWrite(left_positive_pin,value);
    analogWrite(left_negative_pin,0);
    analogWrite(right_positive_pin,value);
    analogWrite(right_negative_pin,0);
}

void hummerbot::goForward(void)
{
    //Serial.println("goForward");
    int value = (hbot_speed/10)*25;   //app contol hbot_speed is 0 ~ 100 ,pwm is 0~255
    //Serial.println(value);
    analogWrite(left_negative_pin,value);
    analogWrite(left_positive_pin,0);
    analogWrite(right_negative_pin,value);
    analogWrite(right_positive_pin,0);
}

void hummerbot::keepStop()
{
  //  Serial.println("keepStop");
    analogWrite(left_positive_pin,0);
    analogWrite(left_negative_pin,0);
    analogWrite(right_positive_pin,0);
    analogWrite(right_negative_pin,0);
}

void hummerbot::turnLeft()
{   
    int value = (hbot_speed/10)*25;   //app contol hbot_speed is 0 ~ 100 ,pwm is 0~255
   // Serial.println("turnLeft");
    analogWrite(left_positive_pin, 0);
    analogWrite(left_negative_pin, value); //the hbot_speed value of motorA is val
    analogWrite(right_negative_pin, 0);
    analogWrite(right_positive_pin, value); //the hbot_speed value of motorB is val
}

void hummerbot::turnRight()
{
    int value = (hbot_speed/10)*25;   //app contol hbot_speed is 0 ~ 100 ,pwm is 0~255
   // Serial.println("turnRight");
    analogWrite(left_positive_pin, value);
    analogWrite(left_negative_pin, 0); //the hbot_speed value of motorA is val
    analogWrite(right_negative_pin, value);
    analogWrite(right_positive_pin, 0); //the hbot_speed value of motorB is val
}

void hummerbot::drive(int digree)
{
//Serial.print("set degree :");
//Serial.print(digree);
//Serial.print("\n");
    int value = (hbot_speed/10)*25;	 //app contol hbot_speed is 0 ~ 100 ,pwm is 0~255
    float f  ;
    if (digree == 0xFFFF)
    {
        keepStop();
    }
    if( digree >= 75 && digree<= 110 )
   {
        goForward();
    }
   if(digree >= 345) 
   {
       turnRight();
   }
    if(digree <= 15) 
   {
       turnRight();
   }
    if( digree >= 250 && digree<= 290)
    {
        goBack();
    }
    if( digree >= 175 && digree <= 195 )
    {
        turnLeft();
    }
//     if (digree >=361 ||digree <= 0 ) 
//     {
//        keepStop();
//    }
    if (digree > 30 && digree < 60) 
    {
        f = (float)(90-digree)/90;
        analogWrite(left_positive_pin,value);
        analogWrite(left_negative_pin, 0); //the hbot_speed value of motorA is val
        analogWrite(right_positive_pin,0);
        analogWrite(right_negative_pin,(float)(value*f)); //the hbot_speed value of motorB is val
    }
    if (digree > 130 && digree < 153)
    {
        f = (float)(180-digree)/90;
        analogWrite(left_negative_pin,value);
        analogWrite(left_positive_pin, 0); //the hbot_hbot_speed value of motorA is val
        analogWrite(right_negative_pin,0);
        analogWrite(right_positive_pin,(float)(value*f)); //the hbot_hbot_speed value of motorB is val
       
    }
    if (digree > 208 && digree < 238) 
    {
        f = (float)(digree-180)/90;
        analogWrite(right_positive_pin,0);
        analogWrite(right_negative_pin, (float)(value*f));          //the hbot_speed value of motorA is val
        analogWrite(left_positive_pin,value);
        analogWrite(left_negative_pin,0); //the hbot_speed value of motorB is val
    } 
    if (digree > 311 && digree < 335  )
    {
        f = (float)(360-digree)/90;
        analogWrite(right_positive_pin,value);
        analogWrite(right_negative_pin, 0);          //the hbot_speed value of motorA is val
        analogWrite(left_positive_pin,0);
        analogWrite(left_negative_pin,(float)(value*f)); //the hbot_speed value of motorB is val
    }
}

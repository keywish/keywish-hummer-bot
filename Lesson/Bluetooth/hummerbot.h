#ifndef HUMMERBOT_H
#define HUMMERBOT_H
#include "Arduino.h"
class hummerbot {

private :
    String bot_type;
    unsigned char addr;
    int degree;
public :
    hummerbot(unsigned int m1,unsigned int m2,unsigned int m3,unsigned int m4,unsigned int led,unsigned int battery);
    unsigned char led_pin;
    unsigned char battery_adc;
    unsigned char temp;
    unsigned char hbot_speed ;
    unsigned char left_positive_pin;
    unsigned char left_negative_pin;
    unsigned char right_positive_pin;
    unsigned char right_negative_pin;

    void init(void);
    void goForward(void);
    void goBack(void);
    void turnLeft(void);
    void turnRight(void);
    void keepStop(void);
    void drive(int degree);
    void setSpeed(int s);
    int getBattery(void);
};
#endif

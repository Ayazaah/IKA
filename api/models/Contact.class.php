<?php

class Contact
{

  public $id;
  public $name;
  public $firstname;
  public $birthdate;
  public $email;
  public $phone;
  public $photo;


  public function __construct($array = null)
  {
    if ($array != null) {
      $this->setId($array["id"]);
      $this->setName($array["name"]);
      $this->setFirstname($array["firstname"]);
      $this->setBirthdate($array["birthdate"]);
      $this->setEmail($array["email"]);
      $this->setPhone($array["phone"]);
      $this->setPhoto($array["photo"]);
    }
  }

  public function getId()
  {
    return $this->id;
  }

  public function setId($id)
  {
    $this->id = intval($id);
  }

  public function getName()
  {
    return $this->name;
  }

  public function setName($name)
  {
    $this->name = $name;
  }

  public function getFirstname()
  {
    return $this->firstname;
  }

  public function setFirstname($firstname)
  {
    $this->firstname = $firstname;
  }

  public function getBirthdate()
  {
    return $this->birthdate;
  }

  public function setBirthdate($birthdate)
  {
    $this->birthdate = $birthdate;
  }

  public function getEmail()
  {
    return $this->email;
  }

  public function setEmail($email)
  {
    $this->email = $email;
  }

  public function getPhone()
  {
    return $this->phone;
  }

  public function setPhone($phone)
  {
    $this->phone = $phone;
  }

  public function getPhoto()
  {
    return $this->photo;
  }

  public function setPhoto($photo)
  {
    $this->photo = $photo;
  }
}

<?php

class BIManager
{

  private $db;

  public function __construct($db)
  {
    $this->db = $db;
  }

  public function getStats()
  {
    $stats = array();
    $sql = "SELECT MONTH(date) as month,sum(amount) as amount from salesOrder GROUP BY MONTH(date) ORDER BY MONTH(date)";
    try {
      $prep = $this->db->prepare($sql);
      $prep->execute();
      $result = $prep->fetchAll(PDO::FETCH_ASSOC);
      foreach ($result as $s) {
        array_push($stats, $s);
      }
    } catch (PDOException $e) {
      die($e->getMessage());
    } finally {
      $prep = null;
    }
    return $stats;
  }

  public function getTopCustomer()
  {
    $stats = array();
    $sql = "SELECT name,sum(amount) as amount from salesOrder GROUP BY name ORDER BY sum(amount) DESC LIMIT 10";
    try {
      $prep = $this->db->prepare($sql);
      $prep->execute();
      $result = $prep->fetchAll(PDO::FETCH_ASSOC);
      foreach ($result as $s) {
        array_push($stats, $s);
      }
    } catch (PDOException $e) {
      die($e->getMessage());
    } finally {
      $prep = null;
    }
    return $stats;
  }
}
